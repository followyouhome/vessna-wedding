const keystone = require('keystone');
const Types = keystone.Field.Types;
const MainPromo = require('../partials/MainPromo');
const Promo = require('../partials/Promo');
const Seo = require('../partials/Seo');
const {
  PAGE_NEWS,
} = require('../../../config/constants.js');

const Inherit = [
  'Мета-инфо', Seo.schema,
  'Промо', Promo.schema,
  'Большое промо', MainPromo.schema,
];

var News = new keystone.List('News', {
  label: 'Новости',
  plural: 'Новости',
  singular: 'Новость',
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-publishedDate',
  sortable: false,
  hidden: false,
});

News.add(...Inherit, 'Статья', {
  name: { label: 'Название', type: String, required: true },
  state: {
  	label: 'Статус',
  	type: Types.Select,
  	default: 'draft',
  	index: true,
  	options: [{
  		label: 'Черновик', value: 'draft',
  	}, {
  		label: 'Опубликовано', value: 'published',
  	}, {
  		label: 'Архив', value: 'archived',
  	}],
  },
  author: { label: 'Автор', type: Types.Relationship, ref: 'user' },
  publishedDate: { label: 'Дата публикации', type: Types.Date, default: Date.now },
  footnote: { label: 'Сноска', type: String, required: true, default: 'Читать далее' },
  content: { label: 'Содержимое', type: Types.Html, wysiwyg: true },
});

News.schema.set('toJSON', {
  transform: function(doc, ret, options) {
      ret.route = PAGE_NEWS;
      ret.params = {
        'news': ret.slug,
      };

      return ret;
    },
});

News.defaultColumns = 'name|25%, state|15%, author|15%, publishedDate|25%, promo.image|20%';
News.register();

module.exports = News;
