/**
 * Webpack configuration for generating the client bundle.
 * The VueSSRClientPlugin generates dist/vue-ssr-client-manifest.json, to allow for preloading and prefetching of priority assets.
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const { DefinePlugin, EnvironmentPlugin, optimize } = require('webpack');

module.exports = merge(baseConfig, {
  target: 'web',

  entry: {
    app: './main.client.js',
  },

  node: {
    fs: 'empty',
  },

  module: {
    rules: [
      require('./css-loader.config').client,
    ],
  },

  plugins: [
    new EnvironmentPlugin(['NODE_ENV', 'YANDEX_MAPS_KEY', 'YANDEX_METRIKA_ID']),
    new VueSSRClientPlugin(),
    new DefinePlugin({
      __VUE_ENV__: '"client"',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'Vessna-Wedding',
      filename: 'service-worker.js',
      staticFileGlobs: ['dist/**/*.{js,html,css}'],
      minify: true,
      stripPrefix: 'dist/',
    }),
  ],
});
