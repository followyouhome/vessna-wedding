module.exports.subscriberFormat = email => {
  return {
    email_address: email,
    email_type: 'html',
    language: 'ru',
    status: 'subscribed',
  };
};

module.exports.mailFormat = body => {
  return {
    to: null,
    from: 'Vessna Робот <robot@vessna.wedding>',
    subject: 'Новое сообщение с сайта Vessna-Wedding',
    text: `
      Имя: ${body.name || 'Нет'}
      Тема: ${body.topic || 'Нет'}
      Город: ${body.city || 'Нет'}
      Email: ${body.email || 'Нет'}
      Страна: ${body.country || 'Нет'}
      Телефон: ${body.phone || 'Нет'}
      Сообщение: ${body.message || 'Нет'}
      Обратный звонок: ${body.callback || 'Нет'}
      Получить каталог: ${body.lookbook || 'Нет'}
      Подписаться на рассылку: ${body.subscribe || 'Нет'}
    `,
  };
};

module.exports.newsFormat = news => {
  return {
    seo: news.seo,
    slug: news.slug,
    name: news.name,
    promo: news.promo,
    state: news.state,
    content: news.content,
    main_promo: news.main_promo,
    publishedDate: news.publishedDate,
    route: {
      name: ROUTES.PAGE_NEWS,
      params: {
        slug: news.slug,
      },
    },
  };
};
