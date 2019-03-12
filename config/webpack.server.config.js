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
  target: 'node', // Needed by the vue-loader
  entry: './main.server.js',
  output: {
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2', // Needed by the server bundle renderer
  },
  externals: nodeExternals({
    whitelist: /\.css$/, // Do not externalize CSS files in case we need to import it from a dep
  }),
  plugins: [
    new EnvironmentPlugin(['NODE_ENV']),
    new VueSSRServerPlugin(),
    new DefinePlugin({
      __VUE_ENV__: '"server"',
    }),
  ],
});
