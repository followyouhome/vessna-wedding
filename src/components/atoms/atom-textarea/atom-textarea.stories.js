import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import AtomTextarea from './atom-textarea.vue';

export default {
  title: 'Atom/Textarea',
	component: AtomTextarea,
};

export const Default = () => ({
	components: { AtomTextarea },
  template: `
    <atom-textarea
      v-model="value"
      @input="input"
      :value="value"
      :placeholder="placeholder"
    />
	`,
  props: {
    placeholder: {
      default: text('Placeholder', 'Введите текст'),
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
