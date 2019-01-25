const glob = require('glob');
const path = require('path');
const config = require('../../config');

module.exports = app => {
  const base = config.api.base;

  app.use((req, res, next) => {
    res.locals = {};
    next();
  });

  require('./proxy')(app);
  require('./sitemap')(app);
  require('./static')(app);
  require('./setting')(app);
  require('./navigation')(app);
  require('./pages')(app);
  require('./forms')(app);

  glob.sync(`${__dirname}/query/*`).forEach(file => {
    require(path.resolve(file))(app, base);
  });

  require('./app')(app);
};
