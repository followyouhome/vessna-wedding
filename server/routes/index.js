const keystone = require('keystone');
const sitemap = require('keystone-express-sitemap');

module.exports = app => {
  app.use((req, res, next) => {
    res.locals = {};
    next();
  });

  app.get('/sitemap.xml', (req, res) => {
		sitemap.create(keystone, req, res);
	});

  require('./static')(app);
  require('./config')(app);
  require('./pages')(app);
  require('./query')(app);
  require('./app')(app);
};
