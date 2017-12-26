const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/homepage', [
    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .find({ type: 'wedding' });

      query.exec((err, result) => {
        output.wedding = result;
        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .find({ type: 'prom' });

      query.exec((err, result) => {
        output.prom = result;
        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    }
  ]);
};
