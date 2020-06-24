import { object } from '@storybook/addon-knobs';
import PromoCoupon from './promo-coupon.vue';


export default {
  title: 'Promo/Coupon',
	component: PromoCoupon,
};

export const Default = () => ({
	components: { PromoCoupon },
  template: `
    <promo-coupon :item="item" />
	`,
  props: {
    item: {
      default: object('Item', {
        headline: 'Это наш сайт для оптовых клиентов',
        subline: 'Если ты в поисках своего платья забрела аж сюда - мы дарим промокод на скидку в 10% в нашем интернет-магазине',
        copy: 'Потому что любые старания должны быть вознаграждены',
      }),
    },
  },
});
