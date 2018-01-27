const keystone = require('keystone');
const Types = keystone.Field.Types;
const MainPromo = require('../partials/MainPromo');
const Promo = require('../partials/Promo');
const Seo = require('../partials/Seo');

const routes = require('../../../config/constants.js');

const Inherit = [
  'Мета-инфо', Seo.schema,
  'Промо', Promo.schema,
  'Большое промо', MainPromo.schema,
];

var Page = new keystone.List('Page', {
  label: 'Страницы',
  plural: 'Страницы',
  singular: 'Страница',
  defaultSort: '-publishedDate',
  sortable: false,
  hidden: false,
});

Page.add(...Inherit, 'Страница', {
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
