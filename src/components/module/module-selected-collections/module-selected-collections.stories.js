import { object } from '@storybook/addon-knobs';
import ModuleSelectedCollections from './module-selected-collections.vue';

export default {
  title: 'Module/Selected Collections',
	component: ModuleSelectedCollections,
};

export const Default = () => ({
	components: { ModuleSelectedCollections },
  template: `
    <module-selected-collections :items="items"/>
	`,
  props: {
    items: {
      default: object('Items', [{
        promo: {
          media: 'image',
          image: {
            secure_url: 'https://vessna.wedding/images/vessna-wedding-2018.jpg',
            url: 'https://vessna.wedding/images/vessna-wedding-2018.jpg',
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
      }]),
    },
  },
});
