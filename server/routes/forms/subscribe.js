const _ = require('lodash');
const keystone = require('keystone');
const responseHandler = require('../../lib/response-handler');
const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp('155e7ae12dca44f917cbd729e4810e89-us19');

const { subscriberFormat } = require('../../lib/format');

const LIST = '2f4b4fb4cc';

module.exports = (app, base) => {
  /**
   * @name Get user info
   */
  app.post(base + '/subscribe', (req, res) => {
    const email = req.body.email;

    if (!email) {
      return res.status(401).json({ error: 'email is required' });
    }

    mailchimp.post({ path : `/lists/${LIST}/members` }, subscriberFormat(email))
      .then(function (result) {
        res.cookie('subscribed', true, { httpOnly: false });

        return res.status(200).json(result);
      })
      .catch(err => {
        return res.status(500).json({ error: err });
      });
  });
};
