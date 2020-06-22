<template>
  <main class="module-grid-news isotope-grid">
    <div class="isotope-grid__sizer"></div>
    <promo-news v-for="post in news" v-bind:item="post" v-bind:key="post.slug"/>
  </main>
</template>

<script>
  import ModuleGrid from './module-grid';
  import { PromoNews } from '@/components/promo';

  export default {
    name: 'ModuleGridNews',

    extends: ModuleGrid,

    props: ['news'],

    components: {
      'promo-news': PromoNews,
    },
  };
</script>

<style lang="scss">
  .module-grid-news {
    margin: 10px;

    @media #{$tablet} {
      margin: 0;
    }

    .isotope-grid__sizer {
      width: percentage(1 / 5);

      @media #{$x2large} {
        width: percentage(1 / 4);
      }

      @media #{$xlarge} {
        width: percentage(1 / 4);
      }

      @media #{$large} {
        width: percentage(1 / 3);
      }

      @media #{$medium} {
        width: percentage(1 / 3);
      }

      @media #{$tablet} {
        width: percentage(1 / 2);
      }

      @media #{$phablet} {
        width: percentage(1 / 2);
      }

      @media #{$mobile} {
        width: percentage(1);
      }
    }

    .promo {
      float: left;

      &.promo--width-2,
      &.promo--width-3 {
        width: percentage(1 / 5);

        @media #{$x2large} {
          width: percentage(1 / 4);
        }

        @media #{$xlarge} {
          width: percentage(1 / 4);
        }

        @media #{$large} {
          width: percentage(1 / 3);
        }

        @media #{$medium} {
          width: percentage(1 / 3);
        }

        @media #{$tablet} {
          width: percentage(1 / 2);
        }

        @media #{$phablet} {
          width: percentage(1 / 2);
        }

        @media #{$mobile} {
          width: percentage(1);
        }
      }
    }
  }
</style>

<story group="Modules" name="Grid News">
  <module-grid-news
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
</story>
