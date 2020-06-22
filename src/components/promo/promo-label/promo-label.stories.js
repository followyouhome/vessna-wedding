import { object } from '@storybook/addon-knobs';
import PromoLabel from './promo-label.vue';

export default {
  title: 'Promo/Label',
	component: PromoLabel,
};

export const Default = () => ({
	components: { PromoLabel },
  template: `
    <promo-label :item="item"/>
	`,
  props: {
    item: {
      default: object('Item', {
        headline: 'For The \'Gram',
        copy: 'Подборка лучших фото за сезон 2018 года',
        button: {
          text: 'Открыть Instagram',
          href: '#',
        },
      })
    }
  }
});
