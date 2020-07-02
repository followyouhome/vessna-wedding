import Vuex from 'vuex';
import FormSubscribe from './form-subscribe.vue';

export default {
  title: 'Form/Subscribe',
	component: FormSubscribe,
};

export const Default = () => ({
	components: { FormSubscribe },
  template: `
    <form-subscribe/>
	`,
  store: new Vuex.Store({
    actions: {
      subscribe () {
        return Promise.resolve();
      },
    },
  }),
});
