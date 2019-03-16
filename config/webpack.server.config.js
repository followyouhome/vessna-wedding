/**
 * Webpack configuration for generating the server bundle.
 * The VueSSRServerPlugin turns the entire output of the server build into a single JSON file (vue-ssr-server-bundle.json)
 */
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const { DefinePlugin, EnvironmentPlugin } = require('webpack');

module.exports = merge(baseConfig, {
  target: 'node',

  entry: './main.server.js',

  output: {
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },

  module: {
    rules: [
      require('./css-loader.config').server,
    ],
  },

  externals: nodeExternals({
    whitelist: /\.css$/,
  }),

  plugins: [
    new EnvironmentPlugin(['NODE_ENV']),
    new VueSSRServerPlugin(),
    new DefinePlugin({
      __VUE_ENV__: '"server"',
    }),
  ],
});
