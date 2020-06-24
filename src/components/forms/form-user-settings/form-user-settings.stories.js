import FormUserSettings from './form-user-settings.vue';

export default {
  title: 'Form/User Settings',
	component: FormUserSettings,
};

export const Default = () => ({
	components: { FormUserSettings },
  template: `
    <form-user-settings/>
	`,
});
