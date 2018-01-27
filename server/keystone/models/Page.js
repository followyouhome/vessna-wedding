const keystone = require('keystone');
const Types = keystone.Field.Types;
const Promo = require('./Promo');
const Seo = require('../partials/Seo');

const routes = require('../../../config/constants.js');

var Page = new keystone.List('Page', {
  label: 'Страницы',
  plural: 'Страницы',
  singular: 'Страница',
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-publishedDate',
  inherits: Promo,
  sortable: false,
  hidden: false,
});

Page.add('Мета-инфо', Seo, 'Страница', {
  name: { label: 'Название', type: String, required: true },
  slug: { label: 'Путь', type: String },
  route: { label: 'Роут', type: Types.Select, options: Object.values(routes)},
  content: { label: 'Содержимое', type: Types.Html, wysiwyg: true },
});

Page.schema.set('toJSON', {
  transform: function(doc, ret, options) {
    return ret;
  },
});

Page.defaultColumns = 'name|30%, slug|30%, route|40%';
Page.register();

module.exports = Page;
