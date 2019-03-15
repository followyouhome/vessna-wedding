const keystone = require('keystone');
const Types = keystone.Field.Types;

const Inherit = [];

const Dealer = new keystone.List('Dealer', {
  label: 'Диллеры',
  plural: 'Диллеры',
  singular: 'Диллер',
  autokey: { path: 'slug', from: 'name', unique: true },
  sortable: false,
  hidden: false,
});

Dealer.add(...Inherit, 'Диллер', {
  name: {
    label: 'Название',
    type: Types.Text,
    required: true,
  },
  description: {
    label: 'Описание',
    type: Types.Text,
  },
}, 'Адрес', {
  address: {
    country: {
      label: 'Страна',
      type: Types.Text,
    },
    latlng: {
      label: 'Координаты',
      type: Types.GeoPoint,
    },
    full: {
      label: 'Полный адрес',
      type: Types.Text,
    },
  },
}, 'Контактная информация', {
  contact: {
    phone: {
      label: 'Телефон',
      type: Types.Text,
    },
    email: {
      label: 'Почта',
      type: Types.Text,
    },
    website: {
      label: 'Сайт',
      type: Types.Text,
    },
    social: {
      pinterest: {
        label: 'Pinterest',
        type: Types.Text,
      },
      instagram: {
        label: 'Instagram',
        type: Types.Text,
      },
      facebook: {
        label: 'Facebook',
        type: Types.Text,
      },
    },
  },
});

Dealer.defaultColumns = 'name|40%, address.country|30%, contact.email|30%';
Dealer.register();

module.exports = Dealer;
