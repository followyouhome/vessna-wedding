const keystone = require('keystone');
const Types = keystone.Field.Types;
const Promo = require('./Promo');
const {
  PAGE_DRESS_COLLECTION
} = require('../../../config/constants.js');

var DressCollection = new keystone.List('DressCollection', {
  label:'Коллекции',
  plural: 'Коллекции',
  singular: 'Коллекция',
  sortable: true,
  autokey: { path: 'slug', from: 'name', unique: true },
  inherits: Promo,
  hidden: false
});

DressCollection.add('Коллекция', {
  name: { label: 'Название', type: String, required: true },
  type: {
    type: Types.Select,
  	label: 'Тип',
  	options: [{
  		label: 'Свадебные платья', value: 'wedding'
  	}, {
  		label: 'Вечерние платья', value: 'prom'
  	}]
  }
  // dress: { label: 'Платья', type: Types.Relationship, ref: 'Dress', many: true },
});

DressCollection.schema.set('toJSON', {
  transform: function(doc, ret, options) {
      ret.route = PAGE_DRESS_COLLECTION;
      ret.params = {
        'collection': ret.slug
      };

      return ret;
    }
});

DressCollection.relationship({ path: 'dresses', ref: 'Dress', refPath: 'collections' });

DressCollection.defaultColumns = 'name|25%, type|25%';
DressCollection.register();

module.exports = DressCollection;
