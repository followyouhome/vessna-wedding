import { object } from '@storybook/addon-knobs';
import ModuleContactInfo from './module-contact-info.vue';

export default {
  title: 'Module/Contract Info',
	component: ModuleContactInfo,
};

export const Default = () => ({
	components: { ModuleContactInfo },
  template: `
    <module-contact-info
      :items="[{
        name: 'Главный офис',
        contacts: [{
          type: 'phone',
          value: '+375 29 856 77 00',
        }, {
          type: 'email',
          value: 'contact@vessna.by',
        }]
      }, {
        name: 'Отдел Снабжения',
        contacts: [{
          type: 'phone',
          value: '+375 29 156 06 00',
        }, {
          type: 'email',
          value: 'manager@vessna.by',
        }]
      }, {
        name: 'Отдел Маркетинга',
        contacts: [{
          type: 'phone',
          value: '+375 33 609 50 15',
        }, {
          type: 'email',
          value: 'marketing@vessna.by',
        }]
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
