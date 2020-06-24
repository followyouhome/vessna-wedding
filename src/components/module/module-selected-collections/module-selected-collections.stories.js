import { object } from '@storybook/addon-knobs';
import ModuleSelectedCollections from './module-selected-collections.vue';

export default {
  title: 'Module/Selected Collections',
	component: ModuleSelectedCollections,
};

export const Default = () => ({
	components: { ModuleSelectedCollections },
  template: `
    <promo-brand :item="item"/>
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
