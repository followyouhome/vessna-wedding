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
      
    }
  },
  { loader: 'sass-loader',
    options: {
      
    }
  },
  // { loader: 'postcss-loader' },
  { loader: 'sass-resources-loader',
    options: {
      resources: path.resolve(__dirname, '../src/styles/media.scss')
    }
  },
  
];

let devLoaders = [{ loader: 'vue-style-loader' }].concat(_.clone(productionLoaders, true));
devLoaders.forEach(loader => _.set(loader, 'options.sourceMap', true));

module.exports = {
  test: /\.(css|scss)$/,
  use: isProd
    ? ExtractTextPlugin.extract({
      use: productionLoaders,
      fallback: 'vue-style-loader'
    })
    : devLoaders
};
