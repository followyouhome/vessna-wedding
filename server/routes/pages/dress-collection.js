const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/dress-collection/:slug', [
    (req, res, next) => {
      const query = keystone.list('Page')
                      .model
                      .findOne({ slug: req.params.slug });

      query.exec((err, result) => {
        output = result;
        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);
};
