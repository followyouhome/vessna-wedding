import Vuex from 'vuex';
import FormUserLogout from './form-user-logout.vue';

export default {
  title: 'Form/User Logout',
	component: FormUserLogout,
};

export const Default = () => ({
	components: { FormUserLogout },
  template: `
    <form-user-logout/>
	`,
  store: new Vuex.Store({
    actions: {
      logout () {
        return Promise.resolve();
      },
    },
  }),
});
