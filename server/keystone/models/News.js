const keystone = require('keystone');
const Types = keystone.Field.Types;
const Promo = require('./Promo');
const Seo = require('./Seo');

const {
  PAGE_NEWS
} = require('../../../config/constants.js');

var News = new keystone.List('News', {
  label: 'Новости',
  plural: 'Новости',
  singular: 'Новость',
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-publishedDate',
  inherits: Promo,
  sortable: false,
  hidden: false
});

News.add('Мета-инфо', Seo, 'Статья', {
  name: { label: 'Название', type: String, required: true },
  state: {
  	label: 'Статус',
  	type: Types.Select,
  	default: 'draft',
  	index: true,
  	options: [{
  		label: 'Черновик', value: 'draft'
  	}, {
  		label: 'Опубликовано', value: 'published'
  	}, {
  		label: 'Архив', value: 'archived'
  	}]
  },
  author: { label: 'Автор', type: Types.Relationship, ref: 'user' },
  publishedDate: { label: 'Дата публикации', type: Types.Date, default: Date.now },
  footnote: { label: 'Сноска', type: String, required: true, default: 'Читать далее' },
  content: { label: 'Содержимое', type: Types.Html, wysiwyg: true }
});

News.schema.set('toJSON', {
  transform: function(doc, ret, options) {
      ret.route = PAGE_NEWS;
      ret.params = {
        'news': ret.slug
      };

      return ret;
    }
});

News.defaultColumns = 'name|25%, state|15%, author|15%, publishedDate|25%, promo.image|20%';
News.register();

module.exports = News;
