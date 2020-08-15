const ejs = require('ejs');
const path = require('path');
const keystone = require('keystone');
const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

const User = keystone.list('user');
const INVITE_CODE = process.env.INVITE_CODE;

function userFormat (user) {
  return {
    uid: user._id,
    name: user.name,
    info: user.info,
    email: user.email,
    access: user.access,
  };
}

module.exports = (app, base) => {
  /**
   * @name /user
   * @kind function
   * @description Get actual logged user from keystone
   * @inner
   */
  app.get(base + '/user', (req, res) => {
    if (req.user) {
      return res.status(200).json(userFormat(req.user));
    }

    return res.status(200).json({});
  });

  /**
   * @name /user/login
   * @kind function
   * @description Login user to keystone
   * @inner
   */
  app.post(base + '/user/login', (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(401).json({ error: 'email and password required' });
    }

    keystone.session.signin({ email: req.body.email, password: req.body.password }, req, res, () => {
      res.cookie('uid', req.user._id, { httpOnly: false });

      User.model.updateOne({
        _id: req.user.id,
      }, {
        date: {
          login: new Date().toISOString(),
        },
      }).then(() => {
        res.status(200).json(userFormat(req.user));
      }).catch((err, b) => {
        res.status(401).json({ error: err });
      });
    }, () => {
      return res.status(400).json({ error: 'wrong login or password' });
    });
  });

  /**
   * @name /user/logout
   * @kind function
   * @description Logout user from keystone
   * @inner
   */
  app.post(base + '/user/logout', (req, res) => {
    keystone.session.signout(req, res, () => {
      res.clearCookie('uid');

      return res.status(200).json(userFormat({}));
    });
  });

  /**
   * @name /user/signup
   * @kind function
   * @description Signup user to newsletter
   * @todo Uncomplete
   * @inner
   */
  app.post(base + '/user/registration', (req, res) => {
    User.model.findOne({ email: req.body.email }).exec((err, user) => {
      if (err || user) {
        return res.status(400).json({ error: 'cannot create user' });
      }

      if (req.body.invite !== INVITE_CODE) {
        return res.status(400).json({ error: 'invalid invite code' });
      }

      user = req.body;

      return new User.model({
        name: user.name,
        email: user.email,
        password: user.password,
        info: {
          phone: user.info.phone,
          city: user.info.city,
          shop: user.info.shop,
        },
        access: {
          content: false,
          keystone: false,
          currency: 'rub',
          subscription: user.access.subscription,
        },
        date: {
          login: new Date().toISOString(),
          signup: new Date().toISOString(),
        },
      }).save(() => {
        keystone.session.signin({ email: user.email, password: user.password }, req, res, function () {
          res.cookie('uid', req.user._id, { httpOnly: false });

          ejs.renderFile(path.resolve(__dirname, '../../emails/registration.ejs'), {
            name: req.user.name,
          }, {
            async: false,
          }, (err, html) => {
              mailgun.messages().send({
                to: user.email,
                from: 'Vessna <robot@vessna.wedding>',
                subject: '👗 Регистрация на сайте vessna.wedding',
                html: html,
              }, (err, body) => {
                if (err) {
                  console.error(err);
                }
              });
          });

          return res.status(200).json(userFormat(req.user));
        }, () => {
          return res.status(401).json({ error: 'wrong login or password' });
        });
      });
    });
  });

  /**
   * @name /user/settings
   * @kind function
   * @description Update user settings
   * @inner
   */
  app.post(base + '/user/settings', (req, res) => {
    const user = req.user;
    const body = req.body;

    if (user) {
      user.info.phone = body.info.phone;
      user.info.city = body.info.city;
      user.info.shop = body.info.shop;
      user.access.currency = body.access.currency;
      user.access.subscription = body.access.subscription;
      user.date.settings = new Date().toISOString();

      User.model.updateOne({ _id: user._id }, user).then(() => {
        res.status(200).json(userFormat(user));
      }).catch(err => {
        res.status(401).json({ error: err });
      });
    } else {
      res.status(401).json({ error: 'need login before' });
    }
  });
};
