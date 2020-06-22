import { object } from '@storybook/addon-knobs';
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
});
