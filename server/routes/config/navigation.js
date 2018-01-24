const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

const {
  PAGE_HOMEPAGE,
  PAGE_NEWS_HUB,
  PAGE_DRESS_COLLECTION_HUB,
} = require('../../../config/constants.js');

const FILTER_WEDDING = 'wedding';
const FILTER_PROM = 'prom';

var data;

module.exports = (app, base) => {
  app.get(base + '/navigation', [
    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model.find();

      data = [{
        label: 'Главная страница',
        route: PAGE_HOMEPAGE,
      }, {
        label: 'Новости',
        route: PAGE_NEWS_HUB,
      }];

      query.exec((err, result) => {
        data.push({
          label: 'Свадебные платья',
          // route: PAGE_DRESS_COLLECTION_HUB,
          path: '/wedding-dresses',
          items: result.reduce(function(result, element) {
            if(element.type === FILTER_WEDDING && element.state == 'published') {
              result.push(element);
            }

            return result;
          }, []),
        });

        data.push({
          label: 'Вечерние платья',
          // route: PAGE_DRESS_COLLECTION_HUB,
          path: '/prom-and-party-dresses',
          items: result.reduce(function(result, element) {
            if(element.type === FILTER_PROM && element.state == 'published') {
              result.push(element);
            }

            return result;
          }, []),
        });

        next();
      });
    },
    (req, res) => {
      responseHandler(res, null, data);
    },
  ]);
};
