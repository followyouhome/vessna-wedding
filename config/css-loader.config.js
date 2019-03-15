const _ = require('lodash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const productionLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 2,
      modules: true,
    },
  },
  {
    loader: 'sass-loader',
    options: {
    },
  },
  { loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(__dirname, '../src/styles/animations.scss'),
        path.resolve(__dirname, '../src/styles/variables.scss'),
        path.resolve(__dirname, '../src/styles/colors.scss'),
        path.resolve(__dirname, '../src/stylez/import.scss'),
        path.resolve(__dirname, '../src/styles/media.scss'),
        path.resolve(__dirname, '../src/styles/fonts.scss'),
      ],
    },
  },
];

let devLoaders = [{ loader: 'vue-style-loader' }].concat(_.clone(productionLoaders, true));
devLoaders.forEach(loader => _.set(loader, 'options.sourceMap', true));

module.exports = {
  test: /\.(css|scss)$/,
  use: isProd
    ? ExtractTextPlugin.extract({
      use: productionLoaders,
      fallback: 'vue-style-loader',
    })
    : devLoaders,
};
