const merge = require('webpack-merge');
const { storyLoader } = require("vue-storybook"); // Import!


module.exports = async ({ config, mode }) => {

  const custom = require('../../config/webpack.client.config.js');

  custom.module.rules.push({
    resourceQuery: /blockType=story/,
    loader: storyLoader,
  });

  config.module.rules = custom.module.rules;
  // config.resolve = custom.resolve;




  console.log('Original', config.resolve);

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

  console.log('Result', result.resolve);

  return result;
};
