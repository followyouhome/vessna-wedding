const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/dress-collection/:slug', [
    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .findOne({ slug: req.params.slug });

      query.exec((err, result) => {
        output.collection = result;
        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('Dress')
                      .model
                      .find({ collections: output.collection._id });

      query.exec((err, result) => {
        output.dresses = result;
        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    }
  ]);
};
