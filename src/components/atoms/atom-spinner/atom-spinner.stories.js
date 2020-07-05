import AtomSpinner from './atom-spinner.vue';

export default {
  title: 'Atom/Spinner',
	component: AtomSpinner,
};

export const Default = () => ({
	components: { AtomSpinner },
  template: `
    <atom-spinner/>
	`,
});
