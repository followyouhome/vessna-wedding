const keystone = require('keystone');
const responseHandler = require('../lib/response-handler');

const {
  PAGE_HOMEPAGE,
  PAGE_NEWS_HUB,
  PAGE_DRESS_COLLECTION_PROM,
  PAGE_DRESS_COLLECTION_WEDDING,
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
        name: 'Главная страница',
        route: {
          name: PAGE_HOMEPAGE,
        },
      }, {
        name: 'Новости',
        route: {
          name: PAGE_NEWS_HUB,
        },
      }];

      query.exec((err, result) => {
        data.push({
          name: 'Свадебные платья',
          route: {
            path: '/wedding-dresses',
          },
          items: result.filter(item => item.type === FILTER_WEDDING && item.state == 'published')
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map(item => {
                item._doc.route = {
                  name: PAGE_DRESS_COLLECTION_WEDDING,
                  params: {
                    slug: item._doc.slug,
                  },
                };

                return item._doc;
            }),
        });

        data.push({
          name: 'Вечерние платья',
          route: {
            path: '/prom-and-party-dresses',
          },
          items: result.filter(item => item.type === FILTER_PROM && item.state == 'published')
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map(item => {
                item._doc.route = {
                  name: PAGE_DRESS_COLLECTION_PROM,
                  params: {
                    slug: item._doc.slug,
                  },
                };

                return item._doc;
            }),
        });

        next();
      });
    },
    (req, res) => {
      responseHandler(res, null, data);
    },
  ]);
};
