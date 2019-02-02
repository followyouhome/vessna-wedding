const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

const ROUTES = require('../../../config/constants.js');
const FILTER = {
  'wedding-dresses': 'wedding',
  'prom-and-party-dresses': 'prom',
};

const FILTER2 = {
  'wedding': ROUTES.PAGE_DRESS_COLLECTION_WEDDING,
  'prom': ROUTES.PAGE_DRESS_COLLECTION_PROM,
};

function collectionFormat (collection) {
  return {
    seo: collection.seo,
    promo: collection.promo,
    resources: collection.resources,
    main_promo: collection.main_promo,
    description: collection.description,
    route: {
      name: FILTER2[collection.type],
      params: {
        slug: collection.slug,
      },
    },
  };
}

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

  app.get(base + '/homepage', [
    (req, res, next) => {
      const query = keystone.list('Page')
                      .model
                      .findOne({ slug: 'homepage' });

      query.exec((err, result) => {
        output.main_promo = result.main_promo;
        output.seo = result.seo;
        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .find({ type: 'wedding', state: 'published' })
                      .sort({ sortOrder: 1 });

      query.exec((err, result) => {
        output.wedding = result.map(element => collectionFormat(element));
        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .find({ type: 'prom', state: 'published' })
                      .sort({ sortOrder: 1 });

      query.exec((err, result) => {
        output.prom = result.map(element => collectionFormat(element));
        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('News')
                      .model
                      .find({ state: 'published' })
                      .sort({ sortOrder: 1 });

      query.exec((err, result) => {
        output.news = result.map(element => newsFormat(element));
        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);
};
