const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp(process.env.MAILCHIMP_KEY);

const { subscriberFormat } = require('../../lib/format');
const { COOKIES } = require('../../../config/constants.js');
const LIST = process.env.MAILCHIMP_LIST;

module.exports = (app, base) => {
  /**
   * @name /forms/subscribe
   * @kind function
   * @description Subscribe user to newsletter
   * @inner
   */
  app.post(base + '/forms/subscribe', (req, res) => {
    const email = req.body.email;

    if (!email) {
      return res.status(401).json({ error: 'email is required' });
    }

    mailchimp.post({ path : `/lists/${LIST}/members` }, subscriberFormat(email))
      .then(function (result) {
        res.cookie(COOKIES.STATE_USER_SUBSCRIBED, true, { httpOnly: false });

        return res.status(200).json(result);
      })
      .catch(err => {
        return res.status(500).json({ error: err });
      });
  });
};
