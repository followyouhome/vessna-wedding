const keystone = require('keystone');
const Types = keystone.Field.Types;

const Promo = require('./Promo');

var News = new keystone.List('News', {
  label: 'Новости',
  autokey: { path: 'slug', from: 'name', unique: true },
  inherits: Promo,
  hidden: false
});

News.add('Статья', {
  name: { label: 'Название', type: String, required: true },
  state: {
  	label: 'Статус',
  	type: Types.Select,
  	default: 'draft',
  	index: true,
  	options: [{ 
  		label: 'Черновик', value: 'draft'
  	}, {
  		label: 'Опубликовано', value: 'pubished'
  	}, {
  		label: 'Архив', value: 'archived'
  	}]
  },
  author: { label: 'Автор', type: Types.Relationship, ref: 'user' },
  publishedDate: { label: 'Дата публикации', type: Types.Date, default: Date.now },
  footnote: { label: 'Сноска', type: String, required: true, default: 'Читать далее' },
  content: { label: 'Содержимое', type: Types.Html, wysiwyg: true }
});

News.defaultColumns = 'name|25%, state|25%, author|25%, publishedDate|25%';
News.register();

module.exports = News;