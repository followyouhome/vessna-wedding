import { object } from '@storybook/addon-knobs';
import ModulePromoCards from './module-promo-cards.vue';

export default {
  title: 'Module/Promo Cards',
	component: ModulePromoCards,
};

export const Default = () => ({
	components: { ModulePromoCards },
  template: `
    <module-promo-cards :items="items"/>
	`,
  props: {
    items: {
      default: object('Items', [{
        promo: {
          media: 'image',
          image: {
            secure_url: 'https://vessna.wedding/images/vessna-wedding-2018.jpg',
            url: 'https://vessna.wedding/images/vessna-wedding-2018.jpg',
            height: 1280,
            width: 1920,
          },
          headline: 'Vessna Dress',
          alt: '',
        },
        route: {
          params: {
            to: '#',
          },
        },
      }]),
    },
  },
});
