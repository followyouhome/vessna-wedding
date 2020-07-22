<template>
  <div class="module-grid-dress isotope-grid">
    <div class="isotope-grid__sizer"></div>
    <promo-dress v-for="dress in dresses" :dress="dress" :key="dress.slug"/>
  </div>
</template>

<script>
  import ModuleGrid from '@/components/module/module-grid/module-grid.vue';
  import PromoDress from '@/components/promo/promo-dress/promo-dress';

  export default {
    name: 'ModuleGridDress',

    extends: ModuleGrid,

    props: ['items'],

    watch: {
      items () {
        this.layoutIsotope();
      },
    },

    components: {
      'promo-dress': PromoDress,
    },

    computed: {
      dresses () {
        return this.items.sort((a, b) => parseInt(a.name) - parseInt(b.name));
      },
    },
  };
</script>

<style lang="scss">
  .module-grid-dress {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
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
