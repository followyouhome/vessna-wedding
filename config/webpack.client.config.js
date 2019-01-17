/**
 * Webpack configuration for generating the client bundle.
 * The VueSSRClientPlugin generates dist/vue-ssr-client-manifest.json, to allow for preloading and prefetching of priority assets.
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const { DefinePlugin, EnvironmentPlugin, optimize } = require('webpack');

module.exports = merge(baseConfig, {
  entry: {
    app: './main.client.js',
  },
  node: {
    fs: 'empty',
  },
  resolve: {
      alias: {
          'masonry': 'masonry-layout',
          'isotope': 'isotope-layout',
      },
  },
  plugins: [
    new EnvironmentPlugin(['PORT', 'NODE_ENV']),
    new VueSSRClientPlugin(),
    new DefinePlugin({
      __VUE_ENV__: '"client"',
    }),
    new optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return (
          /node_modules/.test(module.context) &&
          !/\.css$/.test(module.request)
        );
      },
    }),
    new optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
  ],
});
