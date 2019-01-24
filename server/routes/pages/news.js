const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

const ROUTES = require('../../../config/constants.js');

function newsFormat (news) {
  return {
    seo: news.seo,
    name: news.name,
    promo: news.promo,
    state: news.state,
    content: news.content,
    main_promo: news.main_promo,
    publishedDate: news.publishedDate,
    route: {
      name: ROUTES.PAGE_NEWS,
      params: {
        slug: news.slug,
      },
    },
  };
}

module.exports = (app, base) => {
  let output = {};

  app.get(base + '/news', [
    (req, res, next) => {
      const query = keystone.list('Page')
                      .model
                      .findOne({ slug: 'news' });

      query.exec((err, result) => {
        output.main_promo = result.main_promo;
        output.seo = result.seo;
        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('News')
                      .model
                      .find({ state: 'published' });

      query.exec((err, result) => {
        output.news = result.map(item => newsFormat(item));
        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);

  app.get(base + '/news/:slug', [
    (req, res, next) => {
      const query = keystone.list('News')
                      .model
                      .findOne({ state: 'published', slug: req.params.slug });

      query.exec((err, result) => {
        output = newsFormat(result);
        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);
};
