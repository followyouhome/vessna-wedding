import ModuleSubscribe from './module-subscribe.vue';

export default {
  title: 'Module/Subscribe',
	component: ModuleSubscribe,
};

export const Default = () => ({
	components: { ModuleSubscribe },
  template: `
    <module-subscribe/>
	`,
});
