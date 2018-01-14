const chalk = require('chalk');
const config = require('../../../config');

module.exports = app => {
  let base = config.api.base;

  base = '/api/pages';

  require('./homepage')(app, base);
  require('./news')(app, base);
};
