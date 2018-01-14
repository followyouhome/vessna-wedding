const sitemap = require('keystone-express-sitemap');

module.exports = app => {
  app.get('/sitemap.xml', (req, res) => {
    sitemap.create(keystone, req, res);
  });
}
