const keystone = require('keystone');

const User = keystone.list('user');

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

      return res.status(200).json(userFormat(req.user));
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
  app.post(base + '/user/signup', (req, res) => {
    User.model.findOne({ email: req.body.email }).exec((err, user) => {
      if (err || user) {
        return res.status(400).json({ error: 'cannot create user' });
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
          subscription: user.access.subscription,
        },
      }).save(() => {
        keystone.session.signin({ email: user.email, password: user.password }, req, res, function () {
          res.cookie('uid', req.user._id, { httpOnly: false });
          return res.status(200).json(userFormat(user));
        }, () => {
          return res.status(401).json({ error: 'wrong login or password' });
        });
      });
    });
  });
};
