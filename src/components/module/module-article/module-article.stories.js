import { text } from '@storybook/addon-knobs';
import ModuleArticle from './module-article.vue';

export default {
  title: 'Module/Article',
	component: ModuleArticle,
};

export const Default = () => ({
	components: { ModuleArticle },
  template: `
    <module-article :article="article"/>
	`,
  props: {
    article: {
      default: text('text', `
        <h1>123</h1>

        <ul>
          <li>Дата проведения выставки: <strong>с 8 по 9 июня</strong></li>
          <li>Место проведения:</li>
          <li>Наш стенд:</li>
          <li>Часы работы: суббота 10:00 - 18:00, воскресенье 10:00 - 17:00</li>
        </ul>

        <p>Для посещения выставки желательно пройти регистрацию на сайте организатора </p>
      `),
    },
  },
});

Default.story = {
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
