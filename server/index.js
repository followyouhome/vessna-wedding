const fs = require('fs');
const keystone = require('keystone');
const types = require('./keystone/models');

require('dotenv').config();

const pattern = '<script src="<%= adminPath %>/js/admin.js"></script>\n';
const template = fs.readFileSync('node_modules/keystone/admin/server/templates/index.html', 'utf-8');
const updated = template.replace(pattern, pattern + '<script src="/public/scripts/hooks.js"></script>');

fs.writeFileSync('node_modules/keystone/admin/server/templates/index.html', updated, 'utf-8');

keystone.init(require('../config/keystone.config'));
keystone.set('routes', require('./routes'));

keystone.start();
