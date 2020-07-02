import { object } from '@storybook/addon-knobs';
import ModuleFeedbackGrid from './module-feedback-grid.vue';

export default {
  title: 'Module/Feedback Grid',
	component: ModuleFeedbackGrid,
};

export const Default = () => ({
	components: { ModuleFeedbackGrid },
  template: `
    <module-feedback-grid
      :feedbacks="[{
        image: {
          height: 336,
          width: 269,
          url: 'https://marymaximca.cdn.speedyrails.net/media/catalog/product/cache/83cda418bea4fb032eada316ef024fcb/f/p/fp9458_rev_1.jpg'
        }
      }, {
        image: {
          height: 336,
          width: 269,
          url: 'http://timelesslinen.com/wp-content/uploads/2018/04/Linen-Pinafore-apron-Kids-Gold.jpg'
        }
      }, {
        image: {
          height: 336,
          width: 269,
          url: 'https://i.etsystatic.com/9281366/c/1019/809/0/329/il/4e8b76/1223235278/il_340x270.1223235278_93v0.jpg'
        }
      }, {
        image: {
          height: 336,
          width: 269,
          url: 'https://i.pinimg.com/236x/f5/2a/ed/f52aed5c13c3f62aea826bf7b71fcad1--blue-wedding-dresses-blue-weddings.jpg'
        }
      }, {
        image: {
          height: 336,
          width: 269,
          url: 'https://st2.depositphotos.com/3647147/11127/i/950/depositphotos_111275726-stock-photo-beauty-woman-clever-smart-girl.jpg'
        }
      }, {
        image: {
          height: 336,
          width: 269,
          url: 'https://marymaximca.cdn.speedyrails.net/media/catalog/product/cache/83cda418bea4fb032eada316ef024fcb/f/p/fp9458_rev_1.jpg'
        }
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
