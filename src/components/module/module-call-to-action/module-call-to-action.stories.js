import { object } from '@storybook/addon-knobs';
import ModuleCallToAction from './module-call-to-action.vue';

export default {
  title: 'Module/Call To Action',
	component: ModuleCallToAction,
};

export const Default = () => ({
	components: { ModuleCallToAction },
  template: `
    <module-call-to-action
      :content="{
        headline: 'Готовы стать нашим диллером?',
        subline: 'Заполните анкету партнера. Наш менеджер свяжется с Вами в ближайшее время.',
        copy: 'Среднее время ответа - 4 часа'
      }"
      :button="{
        action: 'POPUP_SHOW',
        text: 'Заполните анкету'
      }"
    />
	`,
  props: {
    item: {
      default: object('Item', {
        promo: {
          media: 'image',
          image: {
            secure_url: '/images/vessna-wedding-2018.jpg',
            url: '/images/vessna-wedding-2018.jpg',
            height: 1280,
            width: 1920,
          },
          headline: 'Vessna Dress',
          alt: ''
        },
        route: {
          params: {
            to: '#'
          }
        }
      }),
    },
  },
});
