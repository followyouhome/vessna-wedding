const keystone = require('keystone');
const Types = keystone.Field.Types;

const Promo = require('./Promo');

var DressCollection = new keystone.List('DressCollection', {
  label:'Коллекции',
  singular: 'Коллекция',
  plural: 'Коллекции',
  autokey: { path: 'slug', from: 'name', unique: true },
  inherits: Promo,
  hidden: false
});

DressCollection.add('Коллекция', {
  name: { label: 'Название', type: String, required: true },
  type: {
  	label: 'Тип',
  	type: Types.Select,
  	options: [{ 
  		label: 'Свадебные платья', value: 'wedding'
  	}, {
  		label: 'Вечерние платья', value: 'prom'
  	}]
  },
  // dress: { label: 'Платья', type: Types.Relationship, ref: 'Dress', many: true },
})

DressCollection.relationship({ path: 'dresses', ref: 'Dress', refPath: 'collections' });

DressCollection.defaultColumns = 'name|25%, type|25%';
DressCollection.register();

module.exports = DressCollection;