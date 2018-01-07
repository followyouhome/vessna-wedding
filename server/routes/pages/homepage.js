const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/homepage', [
    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .find({ type: 'wedding' })
                      .sort({ sortOrder: 1 })

      query.exec((err, result) => {
        output.wedding = result;
        // console.log(result.name.test);
        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .find({ type: 'prom' })
                      .sort({ sortOrder: 1 });

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
