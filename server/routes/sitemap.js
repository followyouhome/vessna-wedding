const path = require('path');
const sitemap = require('sitemap-generator');

const generator = sitemap('https://vessna.wedding', {
  stripQuerystring: false,
  filepath: path.join(process.cwd(), 'public/sitemap.xml'),
});

module.exports = app => {
  app.get('/sitemap.xml', (req, res) => {
    generator.on('done', () => {
      res.redirect('/public/sitemap.xml');
    });

    generator.start();
  });
};
