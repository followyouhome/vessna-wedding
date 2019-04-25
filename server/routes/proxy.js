const http = require('http');

module.exports = app => {
  app.use('/images/:folder?/:filename?', function (req, res) {
    const cloudinary = 'http://res.cloudinary.com/vessna/image/upload';
    let query = '';
    let url = '';

    if (req.query.w) {
      query += `w_${req.query.w}`;
    }

    url = `${cloudinary}/${query}/${req.params.folder}`;

    if (req.params.filename) {
      url += `/${req.params.filename}`;
    }


    const image = http.request(url, newRes => {
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
