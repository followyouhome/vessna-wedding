const pkg = require('../package.json');
const path = require('path');
const config = require('../config');

module.exports = {
  'name': config.title,
  'favicon': '../public/logo-48.png',
  'mongo': process.env.MONGODB_URI,
  'updates': path.resolve(__dirname, '../server/keystone/updates'),
  'auto update': true,
  'port': config.port,
  'ssl port': 3001,
  'ssl public port': 443,
  'ssl cert': '$HOME/letsencrypt/etc/live/vessna.wedding/' + 'cert.pem',
  'ssl key': ';$HOME/letsencrypt/etc/live/vessna.wedding/' + 'privkey.pem',
  'ssl ca': '$HOME/letsencrypt/etc/live/vessna.wedding/' + 'fullchain.pem',
  'ssl': (process.env.NODE_ENV === 'production') && true,
  'session': true,
  'session store': 'mongo',
  'signin url': '/user/login',
  'signin redirect': '/user/profile',
  'signout url': '/user/logout',
  'signout redirect': '/',
  'auth': true,
  'user model': 'user',
  'cookie secret': '24634sdfhsdfgh346y34',
  'logger options': {
    skip: (req, res) => res.statusCode < 400,
  },
  letsencrypt: (process.env.NODE_ENV === 'production') && {
    production: true,
    server: 'https://acme-v01.api.letsencrypt.org/directory',
    email: 'vessnaws@gmail.com',
    domains: ['vessna.wedding'],
    register: true,
    tos: true,
  },
};
