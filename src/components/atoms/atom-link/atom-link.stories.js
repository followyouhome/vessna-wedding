import { text } from '@storybook/addon-knobs';
import Vuex from 'vuex';
import AtomLink from './atom-link.vue';

export default {
  title: 'Atom/Link',
	component: AtomLink,
};

export const Default = () => ({
	components: { AtomLink },
  template: `
    <atom-link :to="{path: to}">
      <span>{{label}}</span>
    </atom-link>
	`,
  props: {
    label: {
      default: text('Label', 'Перейти на сайт'),
    },
    to: {
      default: text('To', 'https://vessna.wedding'),
    },
  },
  store: new Vuex.Store({
    getters: {
      amp () {
        return false;
      },
    },
  }),
});
