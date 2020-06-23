import { object } from '@storybook/addon-knobs';
import ModuleRelatedPosts from './module-related-posts.vue';

export default {
  title: 'Module/Related Posts',
	component: ModuleRelatedPosts,
};

export const Default = () => ({
	components: { ModuleRelatedPosts },
  template: `
    <module-related-posts
      :news="[{
        name: 'Съемка свадебной коллекции 2018',
        promo: {
          media: 'image',
          image: {
            url: 'https://vessna.wedding/images/vessna-wedding-2018.jpg',
            height: 1280,
            width: 1920,
          },
          text: '',
          subline: '',
          headline: 'Съемка новой свадебной коллекции 2018 года',
          alt: ''
        },
        publishedDate: '2017-11-12T00:00:00.000Z',
        route: {
          params: {
            to: '#'
          },
        },
      }, {
        name: 'Съемка свадебной коллекции 2018',
        promo: {
          media: 'image',
          image: {
            url: 'https://vessna.wedding/images/vessna-wedding-2018.jpg',
            height: 1280,
            width: 1920,
          },
          text: '',
          subline: '',
          headline: 'Съемка новой свадебной коллекции 2018 года',
          alt: ''
        },
        publishedDate: '2017-11-12T00:00:00.000Z',
        route: {
          params: {
            to: '#'
          },
        },
      }].reduce((res, item, index, arr) => {
        return arr.concat(arr)
      })"
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
