import { object } from '@storybook/addon-knobs';
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
});
