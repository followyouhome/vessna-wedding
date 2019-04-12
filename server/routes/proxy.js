const http = require('http');

module.exports = app => {
  app.use('/images/:filename', function (req, res) {
    const cloudinary = 'http://res.cloudinary.com/vessna/image/upload';
    let query = '';

    if (req.query.w) {
      query += `w_${req.query.w}`;
    }

    const image = http.request(`${cloudinary}/${query}/${req.params.filename}`, newRes => {
        newRes.headers['Cache-Control'] = 'public, max-age=31557600';

        res.writeHead(newRes.statusCode, newRes.headers);
        newRes.pipe(res);
    }).on('error', err => {
        res.statusCode = 500;
        res.end(err);
    });

    req.pipe(image);
  });
};
