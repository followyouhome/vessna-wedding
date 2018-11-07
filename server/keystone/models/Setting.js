const keystone = require('keystone');
const Types = keystone.Field.Types;

const Setting = new keystone.List('Setting', {
  label: 'Настройки',
  plural: 'Настройки',
  singular: 'Настройки',
});

Setting.add({
  name: {
    label: 'Имя',
    type: Types.Text,
    required: true,
    initial: true,
  },
  key: {
    label: 'Параметр',
    type: Types.Text,
    required: true,
    initial: true,
    index: true,
  },
  type: {
    type: Types.Select,
  	label: 'Тип',
  	options: [{
      label: 'Флаг', value: 'boolean',
  	}, {
      label: 'Строка', value: 'string',
  	}],
  },
  value: {
    string: {
      label: 'Значение строки',
      type: String,
      dependsOn: {
        'type': ['string'],
      },
    },
    boolean: {
      label: 'Значение параметра',
      type: Boolean,
      dependsOn: {
        'type': ['boolean'],
      },
    },
  },
});

Setting.defaultColumns = 'name|30%, key|30%, type|40%';
Setting.register();

module.exports = Setting;
