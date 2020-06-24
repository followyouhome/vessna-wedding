import { object } from '@storybook/addon-knobs';
import ModuleOurBrands from './module-our-brands.vue';

export default {
  title: 'Module/Our Brands',
	component: ModuleOurBrands,
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
            secure_url: '/images/vessna-wedding-2018.jpg',
            url: '/images/vessna-wedding-2018.jpg',
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
