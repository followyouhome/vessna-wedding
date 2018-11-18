const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');

const FILTER = {
  'wedding-dresses': 'wedding',
  'prom-and-party-dresses': 'prom',
};

function collectionFormat (collection) {
  return {
    seo: collection.seo,
    promo: collection.promo,
    resources: collection.resources,
    main_promo: collection.main_promo,
    description: collection.description,
  };
}

function pageFormat (page) {
  return {
    seo: page.seo,
    name: page.name,
    slug: page.slug,
    route: page.route,
    content: page.content,
    main_promo: page.main_promo,
  };
}

module.exports = (app, base) => {
  let output = {};
  let id = null;

  app.get(base + '/collection/', [
    (req, res, next) => {
      const query = keystone.list('Page')
                      .model
                      .findOne({ slug: req.query.slug });

      query.exec((err, result) => {
        output = pageFormat(result);

        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('DressCollection')
                      .model
                      .find()
                      .sort('sortOrder');

      query.exec((err, result) => {
        output.collections = {};

        for(let collection of result) {
          if (collection.type === FILTER[req.query.slug]) {
            output.collections[collection.slug] = collectionFormat(collection);
          }
        }

        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);

  app.get(base + '/collection/:slug', [
    (req, res, next) => {
      console.log("AZAZA", req.params.slug);
      const query = keystone.list('DressCollection')
                      .model
                      .findOne({ slug: req.params.slug });

      query.exec((err, result) => {
        output = collectionFormat(result);
        id = result._id;

        next();
      });
    },

    (req, res, next) => {
      const query = keystone.list('Dress')
                      .model
                      .find({ collections: id });

      query.exec((err, result) => {
        output.dresses = result.map(dress => {
          if (!req.user) {
            dress.price = null;
          }

          return dress;
        });

        next();
      });
    },

    (req, res) => {
       responseHandler(res, null, output);
    },
  ]);
};
