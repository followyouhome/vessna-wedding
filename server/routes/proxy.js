const request = require('request');

module.exports = app => {
  app.use('/images/:filename', function (req, res) {
    const cloudinary = 'http://res.cloudinary.com/vessna/image/upload';
    let query = '';

    if(req.query.w) {
      query += `w_${req.query.w}`
    }

    const image = request(`${cloudinary}/${query}/${req.params.filename}`);

    req.pipe(image);
    image.pipe(res);
  });
}
