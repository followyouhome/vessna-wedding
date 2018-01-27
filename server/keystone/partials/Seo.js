const keystone = require('keystone');
const Types = keystone.Field.Types;

keystone.set('cloudinary config', 'cloudinary://973344584935212:qmo8nmPl9pORLT-AjS4UEWgrcqM@vessna' );

const Seo = {
  seo: {
    name: { label: 'Мета-заголовок', type: Types.Text },
    description: { label: 'Мета-описание', type: Types.Text },
    image: {
      label: 'Мета-изображение',
      type: Types.CloudinaryImage,
      uploadOptions: { use_filename: true, unique_filename: false },
      generateFilename: function(file, attemptNumber, callback) {
        callback(null, file.originalname);
      },
    },
  },
};

module.exports = { schema: Seo };
