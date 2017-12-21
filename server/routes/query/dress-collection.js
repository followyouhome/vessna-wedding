const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  var locals = app.locals;

  app.get(base + '/dress-collection/:slug', [
    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .findOne({ slug: req.params.slug });
      
      query.exec((err, result) => {
        locals.collection = result;

        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('Dress')
                      .model
                      .find({ collections: locals.collection._id });
      
      query.exec((err, result) => {
        locals.dresses = result;

        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, locals); 
    }
  ]);
};
