module.exports = app => {
  let base = '/api/page';

  require('./news')(app, base);
  require('./homepage')(app, base);
  require('./collection')(app, base);
  require('./custom')(app, base);
};
