const merge = require('webpack-merge');
const { storyLoader } = require("vue-storybook"); // Import!


module.exports = async ({ config, mode }) => {

  const custom = require('../../config/webpack.client.config.js');

  custom.module.rules.push({
    resourceQuery: /blockType=story/,
    loader: storyLoader,
  });

  config.module.rules = custom.module.rules;

  const result = merge({
    'resolve.alias': 'append',
    customizeArray: merge.unique(
      'plugins',
      ['VueLoaderPlugin'],
      plugin => plugin.constructor && plugin.constructor.name
    ),
  })(config, {
    plugins: custom.plugins,
    resolve: custom.resolve,
  });

  return result;
};
