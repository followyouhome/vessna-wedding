import { action } from '@storybook/addon-actions';
import Vuex from 'vuex';
import FormCooperation from './form-cooperation.vue';

export default {
  title: 'Form/Cooperation',
	component: FormCooperation,
};

export const Default = () => ({
	components: { FormCooperation },
  template: `
    <form-cooperation
      @submit="submit"
      @success="success"
      @failure="failure""
    />
	`,
  store: new Vuex.Store({
    actions: {
      cooperate () {
        return Promise.resolve();
      },
    },
  }),
  methods: {
    submit: action('submit'),
    success: action('success'),
    failure: action('failure'),
  },
});
