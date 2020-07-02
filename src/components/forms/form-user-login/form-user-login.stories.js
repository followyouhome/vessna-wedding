import Vuex from 'vuex';
import FormUserLogin from './form-user-login.vue';

export default {
  title: 'Form/User Login',
	component: FormUserLogin,
};

export const Default = () => ({
	components: { FormUserLogin },
  template: `
    <form-user-login/>
	`,
  store: new Vuex.Store({
    actions: {
      login () {
        return Promise.resolve();
      },
    },
  }),
});
