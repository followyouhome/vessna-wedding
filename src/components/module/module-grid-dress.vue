<template>
  <main class="module-grid-dress isotope-grid" v-if="collection">
    <div class="isotope-grid__sizer"></div>
    <promo-dress v-for="dress in collection.dresses" v-bind:dress="dress" v-bind:key="dress.slug"></promo-dress>
  </main>
</template>

<script>
  import ModuleGridIsotope from './module-grid-isotope';
  import PromoDress from '../promo/promo-dress.vue';

  export default {
    name: 'module-grid-dress',

    extends: ModuleGridIsotope,

    props: ['collection'],

    components: {
      'promo-dress': PromoDress,
    },
  };
</script>

<style lang="scss">
  .module-grid-dress {
    margin: 10px;

    @media #{$tablet} {
      margin: 0;
    }

    .isotope-grid__sizer {
      width: percentage(1 / 6);

      @media #{$x2large} {
        width: percentage(1 / 5);
      }

      @media #{$xlarge} {
        width: percentage(1 / 4);
      }

      @media #{$large} {
        width: percentage(1 / 4);
      }

      @media #{$medium} {
        width: percentage(1 / 3);
      }

      @media #{$tablet} {
        width: percentage(1 / 3);
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

      &.promo--width-2 {
        width: percentage(1 / 6);

        @media #{$x2large} {
          width: percentage(1 / 5);
        }

        @media #{$xlarge} {
          width: percentage(1 / 4);
        }

        @media #{$large} {
          width: percentage(1 / 4);
        }

        @media #{$medium} {
          width: percentage(1 / 3);
        }

        @media #{$tablet} {
          width: percentage(1 / 3);
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
