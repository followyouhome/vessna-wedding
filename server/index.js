const fs = require('fs');
const path = require('path');
const keystone = require('keystone');

fs.readdirSync(path.resolve(__dirname, './keystone/models')).forEach(file => {
  require(path.resolve(__dirname, './keystone/models', file));
});

require('dotenv').config();

keystone.init(require('../config/keystone.config'));

keystone.set('routes', require('./routes'));

keystone.set('nav', {
  'Сайт': ['News', 'Page', 'Setting'],
  'Коллекции': ['DressCollection', 'Dress'],
  'Отзывы': ['Feedback', 'FeedbackGroup'],
  'Клиенты': ['Dealer', 'user'],
});

keystone.start();
