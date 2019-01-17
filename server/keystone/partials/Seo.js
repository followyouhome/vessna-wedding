const keystone = require('keystone');
const Types = keystone.Field.Types;

keystone.set('cloudinary config', 'cloudinary://973344584935212:qmo8nmPl9pORLT-AjS4UEWgrcqM@vessna' );

const Schema = {
  seo: {
    name: { label: 'Мета-заголовок', type: Types.Text },
    description: { label: 'Мета-описание', type: Types.Text },
    image: {
      label: 'Мета-изображение',
      type: Types.CloudinaryImage,
      uploadOptions: { use_filename: true, unique_filename: false },
      generateFilename: function (file, attemptNumber, callback) {
        callback(null, file.originalname);
      },
    },
  },
};

const Methods = {
  toJSON: function (ret) {
    const cloudinary = /(http|https):\/\/res.cloudinary.com\/vessna\/image\/upload\/.*\//;
    const local = '/images/';

    if (ret.seo.image && ret.seo.image.url) {
      ret.seo.image.url = ret.seo.image.url.replace(cloudinary, local);
    }

    if (ret.seo.image && ret.seo.image.secure_url) {
      ret.seo.image.secure_url = ret.seo.image.url.replace(cloudinary, local);
    }

    return ret;
  },
};

module.exports = { schema: Schema, methods: Methods };
