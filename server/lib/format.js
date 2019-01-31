module.exports.subscriberFormat = function (email) {
  return {
    email_address: email,
    email_type: 'html',
    language: 'ru',
    status: 'subscribed',
  };
};
