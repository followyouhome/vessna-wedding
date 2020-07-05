import { action } from '@storybook/addon-actions';
import { select, text, boolean } from '@storybook/addon-knobs';
import shortid from 'shortid';
import AtomInput from './atom-input.vue';

export default {
  title: 'Atom/Input',
	component: AtomInput,
};

export const Default = () => ({
	components: { AtomInput },
  template: `
    <atom-input
      v-model="value"
      :id="id"
      :type="type"
      :title="title"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      @input="input"
    />
	`,
  props: {
    id: {
      default: text('ID', shortid.generate()),
    },
    type: {
      default: select('Type', ['text', 'email']),
    },
    title: {
      default: text('Title', 'Введите любой текст'),
    },
    placeholder: {
      default: text('Placeholder', 'Введите текст'),
    },
    required: {
      default: boolean('Required', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
  },
  data () {
    return {
      value: '',
    };
  },
  methods: {
    input: action('input'),
  },
});
