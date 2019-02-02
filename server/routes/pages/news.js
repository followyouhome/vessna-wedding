const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/news', [
    (req, res, next) => {
      const query = keystone.list('Page')
                      .model
                      .find({ state: 'published' })
                      .findOne({ slug: 'news' });

      query.exec((err, result) => {
        output.main_promo = result.main_promo;
        output.seo = result.seo;
        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('News')
                      .model
                      .find();

      query.exec((err, result) => {
        output.news = result;
        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);
};
