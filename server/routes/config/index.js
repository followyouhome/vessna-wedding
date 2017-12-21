/**
 *
 */

const config = require('../../../config');

module.exports = app => {
  let base = config.api.base;

  base = '/api/config';
  
  require('./navigation')(app, base);
};
