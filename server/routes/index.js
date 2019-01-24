const glob = require('glob');

module.exports = app => {
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
  require('./app')(app);

  glob.sync( './query/*.js' ).forEach(file => {
    require(path.resolve(file));
  });
};
