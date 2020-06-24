import { object } from '@storybook/addon-knobs';
import PromoFullScreenQuote from './promo-full-screen-quote.vue';

export default {
  title: 'Promo/Full Screen Quote',
	component: PromoFullScreenQuote,
};

export const Default = () => ({
	components: { PromoFullScreenQuote },
  template: `
    <promo-full-screen-quote :item="item"/>
	`,
  props: {
    item: {
      default: object('Item', {
        text1: 'Мы будем на',
        text2: 'Moscow Wedding Fashion',
        text3: '1-3 Марта 2017',
        video_webm: 'https://vessna.blob.core.windows.net/vessna/vessna-quote.webm',
        video_mp4: 'https://vessna.blob.core.windows.net/vessna/vessna-quote.mp4',
        video_ogv: 'https://vessna.blob.core.windows.net/vessna/vessna-quote.ogv',
      }),
    },
  },
});
