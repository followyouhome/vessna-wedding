const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output;

  app.get(base + '/news', [
    (req, res, next) => {
      const query = keystone.list('News')
                      .model
                      .find({ state: 'published' })
                      .sort({ publishedDate: -1 });

      query.exec((err, result) => {
        output = result;
        next();
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
                      .findOne({ state: 'published', slug: req.params.slug });

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
