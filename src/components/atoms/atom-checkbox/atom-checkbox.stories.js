import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import shortid from 'shortid';
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
      :label="label"
      :value="value"
      :required="required"
      :block="block"
      :disabled="disabled"
    />
	`,
  props: {
    id: {
      default: text('ID', shortid.generate()),
    },
    label: {
      default: text('Label', 'Подписаться на рассылку'),
    },
    required: {
      default: boolean('Required', false),
    },
    block: {
      default: boolean('Block', false),
    },
    disabled: {
      default: boolean('Disabled', false),
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
