import { object } from '@storybook/addon-knobs';
import PromoTopical from './promo-topical.vue';

export default {
  title: 'Promo/Topical',
	component: PromoTopical,
};

export const Default = () => ({
	components: { PromoTopical },
  template: `
    <promo-topical :item="item"/>
	`,
  props: {
    item: {
      default: object('Item', {
        name: 'Съемка свадебной коллекции 2018',
        promo: {
          media: 'image',
          image: {
            url: 'https://vessna.wedding/images/vessna-wedding-2018.jpg',
            height: 1280,
            width: 1920,
          },
          text: '',
          subline: '',
          headline: 'Съемка новой свадебной коллекции 2018 года',
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
