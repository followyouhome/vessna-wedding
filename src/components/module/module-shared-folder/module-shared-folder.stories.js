import { object } from '@storybook/addon-knobs';
import ModuleSharedFolder from './module-shared-folder.vue';

export default {
  title: 'Module/Shared Folder',
	component: ModuleSharedFolder,
};

export const Default = () => ({
	components: { ModuleSharedFolder },
  template: `
    <module-shared-folder
      :resources="'https://disk.yandex.by'"
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
