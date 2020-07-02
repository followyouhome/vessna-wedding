import { object } from '@storybook/addon-knobs';
import PromoBrand from './promo-brand.vue';

export default {
  title: 'Promo/Brand',
	component: PromoBrand,
};

export const Default = () => ({
	components: { PromoBrand },
  template: `
    <promo-brand :item="item"/>
	`,
  props: {
    item: {
      default: object('Item', {
        promo: {
          media: 'image',
          image: {
            secure_url: 'https://vessna.wedding/images/r74lhtw4aizmvmsr55mw.jpg',
            url: 'https://vessna.wedding/images/r74lhtw4aizmvmsr55mw.jpg',
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
      }),
    },
  },
});
