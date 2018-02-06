const keystone = require('keystone');
const Types = keystone.Field.Types;

const User = new keystone.List('user', {
  label: 'Пользователи',
  plural: 'Пользователи',
  singular: 'Пользователь',
});

User.add({
  name: { label: 'Имя', type: Types.Text, required: true, index: true },
  email: { label: 'Адрес', type: Types.Email, initial: true, index: true },
  password: { label: 'Пароль', type: Types.Password, initial: true },
  canAccessKeystone: { label: 'Доступ', type: Boolean, initial: false },
  phone: { label: 'Телефон', type: Types.Text },
  city: { label: 'Город', type: Types.Text },
  shop: { label: 'Салон', type: Types.Text },
});

User.defaultColumns = 'name|40%, email|40%, canAccessKeystone|20%';
User.register();

module.exports = User;
