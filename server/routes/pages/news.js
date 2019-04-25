const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');
const { newsFormat } = require('../../lib/format');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/news', [
    (req, res, next) => {
      const query = keystone.list('Page')
                      .model
                      .findOne({ slug: 'news' });

      query.exec((err, result) => {
        if (err || !result) {
          responseHandler(res, err, result);
        } else {
          output.main_promo = result.main_promo;
          output.seo = result.seo;
          next();
        }
      });
    },

    (req, res, next) => {
      const query = keystone.list('News')
                      .model
                      .find({ state: 'published' })
                      .sort({ publishedDate: -1 });

      query.exec((err, result) => {
        if (err || !result) {
          responseHandler(res, err, result);
        } else {
          output.news = result.map(item => newsFormat(item));
          next();
        }
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);

  app.get(base + '/news/:slug', [
    (req, res, next) => {
      const query = keystone.list('News')
                      .model
                      .findOne({ slug: req.params.slug });

      query.exec((err, result) => {
        if (err || !result) {
          responseHandler(res, err, result);
        } else {
          output = newsFormat(result);
          next();
        }
      });
    },

    (req, res, next) => {
      const query = keystone.list('News')
                      .model
                      .find({ state: 'published', slug: { $ne: output.slug }})
                      .sort({ publishedDate: -1 });

      query.exec((err, result) => {
        if (err || !result) {
          responseHandler(res, err, result);
        } else {
          output.news = result.map(item => newsFormat(item));
          next();
        }
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);
};
