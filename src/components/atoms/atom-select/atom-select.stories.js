import { action } from '@storybook/addon-actions';
import { text, object } from '@storybook/addon-knobs';
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
      :options="variations"
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
