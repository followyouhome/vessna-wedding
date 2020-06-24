import { object } from '@storybook/addon-knobs';
import PromoDress from './promo-dress.vue';


export default {
  title: 'Promo/Dress',
	component: PromoDress,
};

export const Default = () => ({
	components: { PromoDress },
  template: `
    <promo-dress :dress="dress"/>
	`,
  props: {
    dress: {
      default: object('Dress', {
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
      }),
    },
  },
});
