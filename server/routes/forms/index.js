const chalk = require('chalk');
const config = require('../../../config');

module.exports = app => {
  let base = config.api.base;

  base = '/api/forms';

  require('./subscribe')(app, base);
};
