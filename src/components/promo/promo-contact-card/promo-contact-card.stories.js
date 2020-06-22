import { object } from '@storybook/addon-knobs';
import PromoContactCard from './promo-contact-card.vue';

export default {
  title: 'Promo/Contact Card',
	component: PromoContactCard,
};

export const Default = () => ({
	components: { PromoContactCard },
  template: `
    <promo-contact-card :item="item"/>
	`,
  props: {
    item: {
      default: object('Item', {
        name: 'ООО Вектор',
        contacts: [{
          type: 'phone',
          value: '+375 29 228 77 27'
        }, {
          type: 'email',
          value: 'test@mail.com'
        }]
      })
    }
  }
});
