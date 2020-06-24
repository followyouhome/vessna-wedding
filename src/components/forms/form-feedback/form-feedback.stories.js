import FormFeedback from './form-feedback.vue';

export default {
  title: 'Form/Feedback',
	component: FormFeedback,
};

export const Default = () => ({
	components: { FormFeedback },
  template: `
    <form-feedback/>
	`,
});
