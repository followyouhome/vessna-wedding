const fs = require('fs');
const keystone = require('keystone');

require('./keystone/models');
require('dotenv').config();
require('newrelic');

keystone.init(require('../config/keystone.config'));
keystone.set('routes', require('./routes'));

keystone.start();
