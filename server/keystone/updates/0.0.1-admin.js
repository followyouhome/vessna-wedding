const keystone = require('keystone');
const User = keystone.list('user');
const Page = keystone.list('Page');

module.exports = done => {
  new User.model({
    name: 'Владислав',
    email: 'vladislav@vessna.by',
    password: 'test42Test',
    canAccessKeystone: true,
  }).save();

  new Page.model({
    slug: 'homepage',
    name: 'Главная страница',
    route: 'page-homepage',
    seo: {
      name: 'Свадебные и вечерние наряды от Vessna',
      description: 'Свадебные платья от производителя. Вечерние платья оптом от производителя.',
    },
  }).save();

  new Page.model({
    slug: 'news',
    name: 'Новости',
    route: 'page-news-hub',
    seo: {
      name: 'Новости',
      description: 'Наши новости, обновления и акции',
    },
  }).save();

  new Page.model({
    slug: 'prom-and-party-dresses',
    name: 'Вечерние платья',
    route: 'page-dress-collection-hub',
    seo: {
      name: 'Вечерние платья оптом от производителя',
      description: '',
    },
  }).save();

  new Page.model({
    slug: 'wedding-dresses',
    name: 'Свадебные платья',
    route: 'page-dress-collection-hub',
    seo: {
      name: 'Свадебные коллекции',
      description: '',
    },
  }).save(done);
};
