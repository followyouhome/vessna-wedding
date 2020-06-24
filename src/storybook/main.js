const _ = require('lodash');
const path = require('path');
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const styles = require('../../config/css-loader.config').client;

module.exports = {
  stories: [
    './stories/**/*.stories.@(js|mdx)',
    '../components/**/*.stories.@(js|mdx)',
  ],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
  ],
  webpackFinal: (config) => {
    const cssLoader = _.find(styles.use, { loader : 'css-loader' });

    cssLoader.options.modules = false;

    config.module.rules.push(styles);

    config.resolve.alias['@'] = path.resolve(__dirname, '..'),

    config.plugins.push(new DefinePlugin({
      __VUE_ENV__: '"client"',
    }));

    config.plugins.push(new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: "[id].css",
    }));

    return config;
  },
};
