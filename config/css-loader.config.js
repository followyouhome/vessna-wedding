const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const resolve = file => path.resolve(__dirname, file);

const config = {
  test: /\.(css|scss)$/,
  use: [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMap: !isProd,
        importLoaders: 2,
      },
    }, {
      loader: 'postcss-loader',
      options: {
          plugins: () => [require('autoprefixer')({
              'browsers': ['> 1%', 'last 2 versions'],
          })],
      },
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: !isProd,
        data: `$root: "${process.env.NODE_ENV === 'test' ? '/vessna-wedding' : ''}";`,
      },
    }, {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          resolve('../src/styles/animations.scss'),
          resolve('../src/styles/variables.scss'),
          resolve('../src/styles/colors.scss'),
          resolve('../src/stylez/import.scss'),
          resolve('../src/styles/media.scss'),
          resolve('../src/styles/fonts.scss'),
        ],
      },
    },
  ],
};

module.exports.client = {
  test: config.test,
  use: [isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader', ...config.use],
};

module.exports.server = {
  test: config.test,
  use: ['null-loader', ...config.use],
};
