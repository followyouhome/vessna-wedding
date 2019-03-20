const compression = require('compression');
const express = require('express');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const serve = (relativePath, cache) => express.static(path.resolve(__dirname, relativePath), {
  maxAge: cache && isProd ? 31622400000 : 0,
});

module.exports = app => {
  app.use(compression({ threshold: 0 }));
  app.use('/dist/service-worker.js', express.static(path.resolve(__dirname, '../../dist/service-worker.js'), {
    setHeaders: function (res) {
        res.set('Service-Worker-Allowed', '/');
    },
  }));
  app.use('/dist', serve('../../dist', true));
  app.use('/public', serve('../../public', true));
};
