import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import AtomCheckbox from './atom-checkbox.vue';

export default {
  title: 'Atom/Checkbox',
	component: AtomCheckbox,
};

export const Default = () => ({
	components: { AtomCheckbox },
  template: `
    <atom-checkbox
      v-model="value"
      @input="input"
      :value="value"
      :label="label"
    />
	`,
  props: {
    label: {
      default: text('Label', 'Подписаться на рассылку'),
    },
  },
  data () {
    return {
      value: true,
    };
  },
  methods: {
    input: action('input'),
  },
});
