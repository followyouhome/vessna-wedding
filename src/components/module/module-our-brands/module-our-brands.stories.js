import { object } from '@storybook/addon-knobs';
import ModuleOurBrands from './module-our-brands.vue';

export default {
  title: 'Module/Our Brands',
	component: ModuleOurBrands,
};

export const Default = () => ({
	components: { ModuleOurBrands },
  template: `
    <module-our-brands :brands="brands"/>
	`,
  props: {
    brands: {
      default: object('Brands', [{
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
      }]),
    },
  },
});
