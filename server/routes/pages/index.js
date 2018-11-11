const chalk = require('chalk');
const config = require('../../../config');

module.exports = app => {
  let base = config.api.base;

  base = '/api/page';

  require('./dress-collection')(app, base);
  require('./homepage')(app, base);
  require('./news')(app, base);
};
