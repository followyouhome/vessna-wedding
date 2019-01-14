const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/:slug', [
    (req, res, next) => {
      const query = keystone.list('Page')
                      .model
                      .findOne({ slug: req.params.slug });

      query.exec((err, result) => {
        output.main_promo = result.main_promo;
        output.seo = result.seo;
        output.content = result.content;
        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    }
  ]);
};
