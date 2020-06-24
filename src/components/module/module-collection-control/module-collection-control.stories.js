import { object } from '@storybook/addon-knobs';
import ModuleCollectionControl from './module-collection-control.vue';

export default {
  title: 'Module/Collection Control',
	component: ModuleCollectionControl,
};

export const Default = () => ({
	components: { ModuleCollectionControl },
  template: `
    <module-collection-control/>
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
