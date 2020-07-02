import Vuex from 'vuex';
import FormUserRegistration from './form-user-registration.vue';

export default {
  title: 'Form/User Registration',
	component: FormUserRegistration,
};

export const Default = () => ({
	components: { FormUserRegistration },
  template: `
    <form-user-registration/>
	`,
  store: new Vuex.Store({
    actions: {
      registration () {
        return Promise.resolve();
      },
    },
  }),
});
