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
  require('./query')(app);
  require('./forms')(app);
  require('./app')(app);
};
