import { object } from '@storybook/addon-knobs';
import PromoCollection from './promo-collection.vue';


export default {
  title: 'Promo/Collection',
	component: PromoCollection,
};

export const Default = () => ({
	components: { PromoCollection },
  template: `
    <promo-collection :item="item"/>
	`,
  props: {
    item: {
      default: object('Item', {
        promo: {
          media: 'image',
          image: {
            width: 1920,
            height: 1200,
            resource_type: 'image',
            url: 'http://vessna.wedding/images/vessna-2019-preview.jpg',
          },
          text: '',
          subline: '',
          headline: '<span class=\'font-peignot\'>Preview 2019</span>',
          alt: ''
        },
        route: {
          params: {
            to: '#'
          },
        }
      })
    }
  }
});
