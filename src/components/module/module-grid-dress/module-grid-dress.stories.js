import { object } from '@storybook/addon-knobs';
import ModuleGridDress from './module-grid-dress.vue';

export default {
  title: 'Module/Grid Dress',
	component: ModuleGridDress,
};

export const Default = () => ({
	components: { ModuleGridDress },
  template: `
    <module-grid-dress :items="items"/>
	`,
  props: {
    items: {
      default: object('Items', [{
        slug: '1701',
        name: '1701',
        price: {
          rub: 11000,
          usd: 165,
        },
        images: [{
          url: 'http://vessna.wedding/images/qqsqtopifxboaykgaq7a.jpg',
          width: 1620,
          height: 1080,
        }, {
          url: 'http://vessna.wedding/images/lziu0zfzmpnfe4hp6jr8.jpg',
          width: 720,
          height: 1080,
        }],
        promo: {
          alt: '',
          headline: '1701',
          subline: 'Princess',
          media: 'image',
          image: {
            width: 720,
            height: 1080,
            url: 'http://vessna.wedding/images/1701-svadebnye-platya-pyshnye-foto.jpg',
          },
        },
      }, {
        slug: '1702',
        name: '1702',
        price: {
          rub: 11000,
          usd: 165,
        },
        images: [{
          url: 'http://vessna.wedding/images/qqsqtopifxboaykgaq7a.jpg',
          width: 1620,
          height: 1080,
        }, {
          url: 'http://vessna.wedding/images/lziu0zfzmpnfe4hp6jr8.jpg',
          width: 720,
          height: 1080,
        }],
        promo: {
          alt: '',
          headline: '1701',
          subline: 'Princess',
          media: 'image',
          image: {
            width: 720,
            height: 1080,
            url: 'http://vessna.wedding/images/1701-svadebnye-platya-pyshnye-foto.jpg',
          },
        },
      }, {
        slug: '1703',
        name: '1703',
        price: {
          rub: 11000,
          usd: 165,
        },
        images: [{
          url: 'http://vessna.wedding/images/qqsqtopifxboaykgaq7a.jpg',
          width: 1620,
          height: 1080,
        }, {
          url: 'http://vessna.wedding/images/lziu0zfzmpnfe4hp6jr8.jpg',
          width: 720,
          height: 1080,
        }],
        promo: {
          alt: '',
          headline: '1701',
          subline: 'Princess',
          media: 'image',
          image: {
            width: 720,
            height: 1080,
            url: 'http://vessna.wedding/images/1701-svadebnye-platya-pyshnye-foto.jpg',
          },
        },
      }]),
    },
  },
});
