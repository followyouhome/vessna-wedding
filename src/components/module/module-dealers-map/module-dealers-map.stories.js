import { object } from '@storybook/addon-knobs';
import ModuleDealersMap from './module-dealers-map.vue';

export default {
  title: 'Module/Dealers Map',
	component: ModuleDealersMap,
};

export const Default = () => ({
	components: { ModuleDealersMap },
  template: `
    <module-dealers-map
      :dealers="[{
        name: 'Boutique Natalia Exclusif',
        description: '',
        address: {
          country: 'Канада',
          latlng: [55.76, 37.64],
          full: '1326 Beaubien E, Montreal, Qc H2G 1K8',
        },
        contact: {
          phone: '1-514-678-6868',
          email: '',
          website: 'https://www.nataliaexclusif.com',
          social: {
            pinterest: 'https://www.pinterest.com/nataliaexclusif/',
            instagram: 'https://www.instagram.com/boutiquenataliaexclusif/',
            facebook: 'https://www.facebook.com/boutiquenataliaexclusif',
          },
        },
      }, {
        name: 'Vessna Minsk',
        description: 'Наш салон в Минске',
        address: {
          country: 'Беларусь',
          latlng: [57.76, 38.64],
          full: 'Минск, Веры Хоружей 6Б, павильон 125',
        },
        contact: {
          phone: '+375 29 156 06 00',
          email: 'minsk@vessna.by',
          website: 'https://vessna-minsk.by',
          social: {
            pinterest: '',
            instagram: 'https://instagram.com/vessna_dress',
            facebook: '',
          },
        },
      }, {
        name: 'Салон Дворянка',
        description: '',
        address: {
          country: 'Россия',
          latlng: [58.76, 39.64],
          full: '',
        },
        contact: {
          phone: '',
          email: '',
          website: '',
          social: {
            pinterest: '',
            instagram: '',
            facebook: '',
          },
        },
      }]"
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
