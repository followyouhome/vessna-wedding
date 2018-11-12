const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/empty', [
    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);
};
