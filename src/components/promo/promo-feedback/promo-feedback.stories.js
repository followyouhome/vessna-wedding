import { object } from '@storybook/addon-knobs';
import PromoFeedback from './promo-feedback.vue';

export default {
  title: 'Promo/Feedback',
	component: PromoFeedback,
};

export const Default = () => ({
	components: { PromoFeedback },
  template: `
    <promo-feedback :item="item"/>
	`,
  props: {
    item: {
      default: object('Item', {
        image: {
          height: 336,
          width: 269,
          url: 'https://marymaximca.cdn.speedyrails.net/media/catalog/product/cache/83cda418bea4fb032eada316ef024fcb/f/p/fp9458_rev_1.jpg',
        },
      }),
    },
  },
});
