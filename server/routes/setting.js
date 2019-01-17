const keystone = require('keystone');
const Setting = keystone.list('Setting');

function formatSettings (settings) {
  const result = {};

  settings.forEach((setting) => {
    if (setting.type === 'string') {
      result[setting.key] = setting.value.string;
    } else if (setting.type === 'boolean') {
      result[setting.key] = setting.value.boolean;
    }
  });

  return result;
}

module.exports = app => {
  const base = '/api';

  /**
   * @name Get website settings
   */
  app.get(base + '/setting', (req, res) => {
    Setting.model.find().exec((err, result) => {
      return res.json(formatSettings(result));
    });
  });
};
