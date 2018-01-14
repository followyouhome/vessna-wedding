const keystone = require('keystone');
const Types = keystone.Field.Types;

const Promo = require('./Promo');

var Dress = new keystone.List('Dress', {
  label: 'Платья',
  plural: 'Платья',
  singular: 'Платье',
  autokey: { path: 'slug', from: 'name', unique: true },
  inherits: Promo,
  sortable: false,
  hidden: false,
});

Dress.add('Параметры', {
  name: { type: String, required: true },
  collections: { label: 'Коллекция', type: Types.Relationship, ref: 'DressCollection', many: true },
  images: { label: 'Фотографии платья', type: Types.CloudinaryImages },
  price: {
    usd: { label: 'Цена в $', type: Types.Money, },
    rub: { label: 'Цена в ₽', type: Types.Money, },
  },
});

Dress.defaultColumns = 'name|30%, collections|30%, promo.image|40%';
Dress.register();

module.exports = Dress;
