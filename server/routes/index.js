module.exports = app => {
  app.use((req, res, next) => {
    res.locals = {};
    next();
  });

  require('./static')(app);
  require('./config')(app);
  require('./pages')(app);
  require('./query')(app);
  require('./app')(app);
};
