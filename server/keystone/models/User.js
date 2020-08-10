const keystone = require('keystone');
const Types = keystone.Field.Types;

const User = new keystone.List('user', {
  label: 'Пользователи',
  plural: 'Пользователи',
  singular: 'Пользователь',
});

User.add({
  name: {
    label: 'Имя',
    type: Types.Text,
    required: true,
    index: true,
  },
  email: {
    label: 'Адрес',
    type: Types.Email,
    initial: true,
    index: true,
  },
  password: {
    label: 'Пароль',
    type: Types.Password,
    initial: true,
  },
  info: {
    phone: {
      label: 'Телефон',
      type: Types.Text,
    },
    city: {
      label: 'Город',
      type: Types.Text,
    },
    shop: {
      label: 'Салон',
      type: Types.Text,
    },
  },
  access: {
    keystone: {
      label: 'Администратор',
      type: Boolean,
      initial: false,
    },
    content: {
      label: 'Доступ к материалам',
      type: Boolean,
      initial: false,
    },
    subscription: {
      label: 'Подписка на новости',
      type: Boolean,
      initial: false,
    },
    currency: {
      label: 'Валюта',
    	type: Types.Select,
    	default: 'rub',
    	index: true,
    	options: [{
    		label: 'RUB', value: 'rub',
    	}, {
    		label: 'USD', value: 'usd',
    	}],
    },
  },
  date: {
    login: {
      label: 'Дата последнего входа',
      type: Types.Date,
      default: null,
    },
    signup: {
      label: 'Дата регистрации',
      type: Types.Date,
      default: null,
    },
    settings: {
      label: 'Дата изменения настроек',
      type: Types.Date,
      default: null,
    },
  },
});

User.schema.virtual('canAccessKeystone').get(function () {
    return this.access.keystone;
});

User.schema.pre('validate', function (next) {
    if (!this.name.replace(/[^\w]/gi, '').length) {
        // next(Error('Имя пользователя должно содержать буквы и цифры'));
        next();
    }
    else {
        next();
    }
});

User.defaultColumns = 'name|20%, email|20%, access.keystone|20%, access.content|10%, access.subscription|10% date.login|20%';
User.register();

module.exports = User;
