import ModulePromoCards from './module-promo-cards.vue';

export default {
  title: 'Module/Promo Cards',
	component: ModulePromoCards,
};

export const Default = () => ({
	components: { ModulePromoCards },
  template: `
    <module-promo-cards"/>
	`,
});
