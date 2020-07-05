import { action } from '@storybook/addon-actions';
import { select, text, boolean } from '@storybook/addon-knobs';
import shortid from 'shortid';
import AtomButton from './atom-button.vue';

export default {
  title: 'Atom/Button',
	component: AtomButton,
};

export const Default = () => ({
	components: { AtomButton },
  template: `
    <atom-button
      :id="id"
      :type="type"
      :title="title"
      :label="label"
      :block="block"
      :disabled="disabled"
      @click="click"
    />
	`,
  props: {
    id: {
      default: text('ID', shortid.generate()),
    },
    type: {
      default: select('Type', ['button', 'submit']),
    },
    title: {
      default: text('Title', 'Нажми на кнопку - получишь результат'),
    },
    label: {
      default: text('Label', 'Подписаться'),
    },
    block: {
      default: boolean('Block', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
  },
  methods: {
    click: action('click'),
  },
});
