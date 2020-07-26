const glob = require('glob');
const path = require('path');
const config = require('../../config');
const cache = require('./cache');

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

  glob.sync(`${__dirname}/forms/*`).forEach(file => {
    require(path.resolve(file))(app, base);
  });

  glob.sync(`${__dirname}/query/*`).forEach(file => {
    require(path.resolve(file))(app, base);
  });

  app.get('/refresh', (req, res) => {
    cache.reset();
    res.end('Cache cleared');
  });

  require('./app')(app);
};
