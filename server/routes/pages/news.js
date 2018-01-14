const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/news', [
    (req, res, next) => {
      const query = keystone.list('Page')
                      .model
                      .findOne({ slug: 'news' });

      query.exec((err, result) => {
        output.main_promo = result.main_promo;
        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    }
  ]);
};
