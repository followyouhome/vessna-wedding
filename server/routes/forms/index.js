module.exports = app => {
  let base = '/api/forms';

  require('./subscribe')(app, base);
};
