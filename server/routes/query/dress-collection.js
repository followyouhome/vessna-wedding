const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/dress-collection/', [
    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .find()
                      .sort('sortOrder');

      query.exec((err, result) => {
        output = {};

        for(let collection of result) {
          output[collection.slug] = collection;
        }

        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);

  app.get(base + '/dress-collection/:slug', [
    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .findOne({ slug: req.params.slug })
                      .populate('feedbacks.links');

      query.exec((err, result) => {
        output = {};
        output.collection = result;
        output.main_promo = result.main_promo;
        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('Dress')
                      .model
                      .find({ collections: output.collection._id });

      query.exec((err, result) => {
        output.dresses = result.map(dress => {
          if (!req.user) {
            dress.price = null;
          }

          return dress;
        });

        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);
};
