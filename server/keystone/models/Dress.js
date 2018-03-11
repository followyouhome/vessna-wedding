const keystone = require('keystone');
const Types = keystone.Field.Types;
const MainPromo = require('../partials/MainPromo');
const Promo = require('../partials/Promo');
const Seo = require('../partials/Seo');

keystone.set('cloudinary config', 'cloudinary://973344584935212:qmo8nmPl9pORLT-AjS4UEWgrcqM@vessna' );

const Inherit = [
  'Мета-инфо', Seo.schema,
  'Промо', Promo.schema,
  'Большое промо', MainPromo.schema,
];

const Dress = new keystone.List('Dress', {
  label: 'Платья',
  plural: 'Платья',
  singular: 'Платье',
  autokey: { path: 'slug', from: 'name', unique: true },
  sortable: false,
  perPage: 25,
  hidden: false,
});

Dress.add(...Inherit, 'Параметры', {
  name: { label: 'Название', type: String, required: true },
  collections: { label: 'Коллекция', type: Types.Relationship, ref: 'DressCollection', many: true },
  images: {
    label: 'Фотографии платья',
    type: Types.CloudinaryImages,
    uploadOptions: { use_filename: true, unique_filename: false },
    generateFilename: function(file, attemptNumber, callback) {
      callback(null, file.originalname);
    },
  },
  price: {
    usd: { label: 'Цена в $', type: Types.Money },
    rub: { label: 'Цена в ₽', type: Types.Money },
  },
});

Dress.schema.set('toJSON', {
  transform: function(doc, ret, options) {
    ret = Seo.methods.toJSON(ret);

    ret = Promo.methods.toJSON(ret);
    ret = MainPromo.methods.toJSON(ret);

    return ret;
  },
});

Dress.schema.pre('save', function(next) {
  const cloudinary = /(http|https):\/\/res.cloudinary.com\/vessna\/image\/upload\/.*\//;
  const local = '/images/';

  Promo.methods.save.call(this);
  MainPromo.methods.save.call(this);

  if(this.images && this.images.length) {
    for(let i = 0; i < this.images.length; i++) {
      if (this.images[i].url) {
        this.images[i].url = this.images[i].url.replace(cloudinary, local);
      }

      if (this.images[i].secure_url) {
        this.images[i].secure_url = this.images[i].url.replace(cloudinary, local);
      }
    }
  }

  next(this);
});

Dress.defaultColumns = 'name|30%, collections|30%, promo.image|40%';
Dress.register();

module.exports = Dress;
