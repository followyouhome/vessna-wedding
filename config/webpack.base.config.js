/**
 * Webpack base configuration for both server and client.
 */
const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


const isProd = process.env.NODE_ENV === 'production';
const resolve = file => path.resolve(__dirname, file);

const config = {
  devtool: isProd ? false : 'cheap-module-source-map',
  context: resolve('../src'),
  output: {
    path: resolve('../dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      require('./vue-loader.config'),
      require('./css-loader.config'),
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProd ? 'warning' : false,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('../src'),
      'masonry': 'masonry-layout',
      'isotope': 'isotope-layout',
    },
  },
  plugins: isProd
    ? [
      new VueLoaderPlugin(),
      // new ExtractTextPlugin({
      //   filename: 'common.[chunkhash].css',
      // }),
    ]
    : [
      new VueLoaderPlugin(),
      // new CleanPlugin(['dist/*.*', '!dist/.gitignore'], {
      //   root: process.cwd(),
      // }),
      // new FriendlyErrorsPlugin({
      //   compilationSuccessInfo: {
      //     messages: ['You application is running at http://localhost:3000'],
      //   },
      // }),
    ],
};

module.exports = config;
