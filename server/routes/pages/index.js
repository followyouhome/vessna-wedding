const chalk = require('chalk');
const config = require('../../../config');

module.exports = app => {
  let base = config.api.base;

  base = '/api/page';

  require('./news')(app, base);
  require('./empty')(app, base);
  require('./homepage')(app, base);
  require('./collection')(app, base);
};
