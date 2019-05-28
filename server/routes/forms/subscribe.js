const mailgun = require('mailgun-js')({apiKey: process.env.MAILGUN_KEY, domain: process.env.MAILGUN_DOMAIN});

const { mailFormat } = require('../../lib/format');
const { COOKIES } = require('../../../config/constants.js');
const LIST = process.env.MAILGUN_LIST_MANAGERS;
// const LIST = process.env.MAILCHIMP_LIST_SUBSCRIBERS;
const EMAIL_PATTERN = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

module.exports = (app, base) => {
  /**
   * @name /forms/subscribe
   * @kind function
   * @description Subscribe user to newsletter
   * @inner
   */
  app.post(base + '/forms/subscribe', (req, res) => {
    const mail = mailFormat(req.body);
    const email = req.body.email;

    if (!email || !EMAIL_PATTERN.exec(email)) {
      return res.status(500).json({ error: 'Invalid email' });
    }

    mailgun.lists(LIST).members().list((err, data) => {
      if (err) {
        return res.status(500).json({ error: err });
      }

      data.items.forEach(item => {
        mail.to = item.address;

        mailgun.messages().send(mail, (err, body) => {
          if (err) {
            return res.status(500).json({ error: err });
          }

          return res.status(200).json({ error: body });
        });
      });
    });
  });
};
