import { action } from '@storybook/addon-actions';
import { text, object, boolean } from '@storybook/addon-knobs';
import AtomSelect from './atom-select.vue';

export default {
  title: 'Atom/Select',
	component: AtomSelect,
};

export const Default = () => ({
	components: { AtomSelect },
  template: `
    <atom-select
      v-model="value"
      @input="input"
      :value="value"
      :label="label"
      :block="block"
      :options="variations"
      :disabled="disabled"
    />
	`,
  props: {
    label: {
      default: text('Label', 'Подписаться на рассылку'),
    },
    variations: {
      default: object('Options', [{
        label: 'Меня трудно найти',
        value: 1,
      }, {
        label: 'Легко потерять',
        value: 2,
      }, {
        label: 'Невозможно забыть',
        value: 3,
      }, {
        label: 'Недоступная опция',
        value: 100500,
        disabled: true,
      }]),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
    block: {
      default: boolean('Block', true),
    },
  },
  data () {
    return {
      value: 2,
    };
  },
  methods: {
    input: action('input'),
  },
});
