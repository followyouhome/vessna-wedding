const _ = require('lodash');
const keystone = require('keystone');
const uidCookie = require('../../lib/uid-cookie');
const responseHandler = require('../../lib/response-handler');

const User = keystone.list('user');

//function errorHandler(res, )

module.exports = (app, base) => {

  app.post(base + '/user/signup', (req, res) => {
    const data = req.body;

    User.model.findOne({ email: data.email }).exec((err, user) => {
      if (err) {
        return res.status(401).json({ error: 'Ошибка базы данных, попробуйте позже' });
      }

      if (user) {
        return res.status(401).json({ error: 'Пользователь с таким адресом уже зарегистрирован' });
      }

      return new User.model({
        name: data.name,
        email: data.email,
        password: data.password,
        canAccessKeystone: false,
        phone: data.phone,
        city: data.city,
        shop: data.shop,
      }).save(err => {
        keystone.session.signin({ email: req.body.email, password: req.body.password }, req, res, function() {
          uidCookie.set(req, res);
          responseHandler(res, null, formatUser(req.user));
        }, function(err) {
          return res.status(401).json({ error: 'wrong login or password' });
        });
      });
    });
  });

  // user login
  app.post(base + '/user/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(401).json({ error: 'email and password required' });
    }

    keystone.session.signin({ email: req.body.email, password: req.body.password }, req, res, function() {
      uidCookie.set(req, res);
      responseHandler(res, null, formatUser(req.user));
    }, function(err) {
      return res.status(401).json({ error: 'wrong login or password' });
    });
  });

  // user logout
  app.post(base + '/user/logout', (req, res) => {
    keystone.session.signout(req, res, function(err) {
      uidCookie.remove(req, res);
      responseHandler(res, err, {});
    });
  });

  // restrict GET users/:id to the active user session
  app.get(base + '/users/:id', (req, res) => {
    if (req.user && req.user._id.toString() === req.params.id) {
      return res.json(formatUser(req.user)).end(); // no reason to make a DB call here
    }

    return res.sendStatus(404).end();
  });

  function formatUser(user) {
    return _.omit(user.toJSON(), 'password')
  }
};
