import Vuex from 'vuex';
import FormCooperation from './form-cooperation.vue';

export default {
  title: 'Form/Cooperation',
	component: FormCooperation,
};

export const Default = () => ({
	components: { FormCooperation },
  template: `
    <form-cooperation/>
	`,
  store: new Vuex.Store({
    actions: {
      cooperate () {
        return Promise.resolve();
      },
    },
  }),
});
