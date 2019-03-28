const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/contact', [
    (req, res, next) => {
      const query = keystone.list('Page')
                      .model
                      .findOne({ slug: 'contact' });

      query.exec((err, result) => {
        output.main_promo = result.main_promo;
        output.seo = result.seo;
        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('Dealer')
                      .model
                      .find();

      query.exec((err, result) => {
        output.dealers = result;
        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);
};
