import { object } from '@storybook/addon-knobs';
import ModuleArticle from './module-article.vue';

export default {
  title: 'Module/Article',
	component: ModuleArticle,
};

export const Default = () => ({
	components: { ModuleArticle },
  template: `
    <module-article
      :article="`
        <h1>123</h1>


        <ul>
          <li>Дата проведения выставки: <strong>с 8 по 9 июня</strong></li>
          <li>Место проведения:</li>
          <li>Наш стенд:</li>
          <li>Часы работы: суббота 10:00 - 18:00, воскресенье 10:00 - 17:00</li>
        </ul>

        <p>Для посещения выставки желательно пройти регистрацию на сайте организатора </p>

      `"
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
