/**
 * Webpack configuration for generating amp styles.
 * The VueSSRClientPlugin generates dist/vue-ssr-client-manifest.json, to allow for preloading and prefetching of priority assets.
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge.strategy({
  output: 'append',
  optimization: 'replace',
})(baseConfig, {
  target: 'web',

  entry: {
    'amp-entry': './main.client.js',
  },

  output: {
    filename: '[name]-amp.js',
  },

  node: {
    fs: 'empty',
  },

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        amp: {
          name: 'amp-core',
          test: module => module.type === 'javascript/auto',
          enforce: true,
          chunks: 'all',
        },
      },
    },
  },

  module: {
    rules: [
      require('./css-loader.config').client,
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-amp.css',
    }),
  ],
});
