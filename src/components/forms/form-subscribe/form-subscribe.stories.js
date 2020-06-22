import { object } from '@storybook/addon-knobs';
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
});
