const keystone = require('keystone');
const Types = keystone.Field.Types;
const MainPromo = require('../partials/MainPromo');
const Promo = require('../partials/Promo');
const Seo = require('../partials/Seo');
const {
  PAGE_DRESS_COLLECTION, PAGE_DRESS_COLLECTION_PROM, PAGE_DRESS_COLLECTION_WEDDING, PAGE_DRESS_COLLECTION_CAPSULE
} = require('../../../config/constants.js');

const Inherit = [
  'Мета-инфо', Seo.schema,
  'Промо', Promo.schema,
  'Большое промо', MainPromo.schema,
];

const DressCollection = new keystone.List('DressCollection', {
  label:'Коллекции',
  plural: 'Коллекции',
  singular: 'Коллекция',
  sortable: true,
  autokey: { path: 'slug', from: 'name', unique: true },
  hidden: false
});

DressCollection.add(...Inherit, 'Коллекция', {
  name: { label: 'Название', type: String, required: true },
  type: {
    type: Types.Select,
  	label: 'Тип',
  	options: [{
      label: 'Вечерние платья', value: 'prom',
  	}, {
      label: 'Свадебные платья', value: 'wedding',
  	}, {
      label: 'Капсульная коллекция', value: 'capsule',
    }],
  },
  state: {
  	label: 'Статус',
  	type: Types.Select,
  	default: 'draft',
  	options: [{
  		label: 'Черновик', value: 'draft',
  	}, {
  		label: 'Опубликовано', value: 'published',
  	}, {
  		label: 'Архив', value: 'archived',
  	}],
  },
  // dress: {
  //   label: 'Платья',
  //   type: Types.Relationship,
  //   ref: 'Dress',
  //   many: true
  // },
});

DressCollection.schema.set('toJSON', {
  transform: function(doc, ret, options) {
      if (ret.type == 'prom') {
        ret.route = PAGE_DRESS_COLLECTION_PROM;
      } else if (ret.type == 'wedding') {
        ret.route = PAGE_DRESS_COLLECTION_WEDDING;
      }

      ret.params = {
        'collection': ret.slug
      };

      return ret;
    }
});

DressCollection.relationship({ path: 'dresses', ref: 'Dress', refPath: 'options.collections' });

DressCollection.defaultColumns = 'name|30%, type|30%, state|20%, promo.image|20%';
DressCollection.register();

module.exports = DressCollection;
