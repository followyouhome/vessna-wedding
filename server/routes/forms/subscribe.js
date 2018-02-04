const _ = require('lodash');
const keystone = require('keystone');
const nodemailer = require('nodemailer');
const responseHandler = require('../../lib/response-handler');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vessnaws@gmail.com',
    pass: 'catchmeifyoucan',
  },
});

const mail = {
  from: 'vessnaws@gmail.com',
  to: 'contact@vessna.by',
  subject: 'Новый запрос на подписку',
  text: '',
};

module.exports = (app, base) => {

  app.post(base + '/subscribe', (req, res) => {
    const data = req.body;

    if (!data.email) {

    }

    mail.text = data.email;

    transporter.sendMail(mail, function(error, info){
      if (error) {
        console.log(error);
        res.end('fails');

      } else {
        console.log('Email sent: ' + info.response);
        res.end('success');
      }
    });
  });
};
