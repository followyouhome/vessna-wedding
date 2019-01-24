const keystone = require('keystone');
const responseHandler = require('../lib/response-handler');

const {
  PAGE_HOMEPAGE,
  PAGE_NEWS_HUB,
} = require('../../config/constants.js');

const FILTER_WEDDING = 'wedding';
const FILTER_PROM = 'prom';

let data;

module.exports = (app) => {
  const base = '/api';

  app.get(base + '/navigation', [
    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model.find();

      data = [{
        label: 'Новости',
        route: PAGE_NEWS_HUB,
      }];

      query.exec((err, result) => {
        data.push({
          label: 'Свадебные платья',
          // route: PAGE_DRESS_COLLECTION_HUB,
          path: '/wedding-dresses',
          items: result.filter(item => item.type === FILTER_WEDDING && item.state == 'published').sort((a, b) => a.sortOrder - b.sortOrder),
        });

        data.push({
          label: 'Вечерние платья',
          path: '/prom-and-party-dresses',
          items: result.filter(item => item.type === FILTER_PROM && item.state == 'published').sort((a, b) => a.sortOrder - b.sortOrder),
        });

        next();
      });
    },
    (req, res) => {
      responseHandler(res, null, data);
    },
  ]);
};
