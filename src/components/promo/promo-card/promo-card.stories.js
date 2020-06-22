import { object } from '@storybook/addon-knobs';
import PromoCard from './promo-card.vue';

export default {
  title: 'Promo/Card',
	component: PromoCard,
};

export const Default = () => ({
	components: { PromoCard },
  template: `
    <promo-card :item="item"/>
	`,
  props: {
    item: {
      default: object('Item', {
          promo: {
            media: 'video',
            image: {
              width: 1920,
              height: 1200,
              resource_type: 'image',
              url: 'http://vessna.wedding/images/vessna-2019-collection.jpg',
            },
            audio: {},
            video: {
              webm: {
                mimetype: 'video/webm',
                filename: 'vessna-2019-web.webm',
                size: 563288,
                etag: '\'0x8D682595FF6F5F8\'',
                container: 'vessna',
                url: 'https://vessna.blob.core.windows.net/vessna/vessna-2019-web.webm'
              },
              mp4: {
                mimetype: 'video/mp4',
                filename: 'vessna-2019-web.mp4',
                size: 573831,
                etag: '\'0x8D682595FADAAC3\'',
                container: 'vessna',
                url: 'https://vessna.blob.core.windows.net/vessna/vessna-2019-web.mp4'
              },
              ogv: {
                mimetype: 'video/ogg',
                filename: 'vessna-2019-web.ogv',
                size: 514538,
                etag: '\'0x8D682595FBDDA4F\'',
                container: 'vessna',
                url: 'https://vessna.blob.core.windows.net/vessna/vessna-2019-web.ogv'
              }
            },
            text: '<p>Тенденция раздельного наряда продолжает набирать обороты, так как купить шикарное платье на один раз могут себе позволить немногие.</p>\r\n<p>В то время, как раздельный наряд, состоящий из юбки и топа или корсета можно не раз обыграть в менее торжественных случаях. И именно это ценится нашими клиентами. Кружевные лифы в самом разнообразном исполнении сочетаются с длинными струящимися атласными юбками, либо с пышными юбками миди и в пол. К любому топу в этой коллекции можно предложить не менее пяти вариантов юбок различного исполнения на практически любой вкус клиента &ndash; от мини до макси, от прямых до пышных.</p>\r\n<p>Многие модели замечательно подходят не только для выпускниц, но и для их мам. И подобрать наряд в стиле &laquo;мама+дочка&raquo; - тоже замечательная возможность обратить на себя внимание.</p>',
            subline: 'Вечерняя коллекция этого года',
            headline: 'Vessna 2019'
          },
          description: '',
          route: {
            params: {
              'to': '#'
            }
          }
      }),
    },
  },
});
