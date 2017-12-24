const keystone = require('keystone');
const Types = keystone.Field.Types;

const Promo = require('./Promo');

var Dress = new keystone.List('Dress', {
  label: 'Платья',
  singular: 'Платье',
  plural: 'Платья',
  autokey: { path: 'slug', from: 'name', unique: true },
  inherits: Promo,
  sortable: false,
  hidden: false,
});

Dress.add('Параметры', {
  name: { type: String, required: true },
  collections: { label: 'Коллекция', type: Types.Relationship, ref: 'DressCollection', many: true },
  images: { label: 'Фотографии платья', type: Types.CloudinaryImages }
});

Dress.defaultColumns = 'name|50%, collections|50%,';
Dress.register();

module.exports = Dress;
