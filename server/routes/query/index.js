const config = require('../../../config');

module.exports = app => {
  let base = config.api.base;

  require('./user')(app, base);
  require('./news')(app, base);
};
