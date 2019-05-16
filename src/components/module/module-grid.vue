<template>

</template>

<script>
  import isMobile from 'ismobilejs';
  import Module from './module';

  export default {
    name: 'module-grid--isotope',

    extends: Module,

    data () {
      return {
        isotope: null,
      };
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        if (!isMobile.phone) {
          require.ensure(['isotope-layout'], require => {
            const Isotope = require('isotope-layout');

            this.isotope = new Isotope(this.$el, {
              itemSelector: '.promo',
              layoutMode: 'masonry',
              masonry: {
                  columnWidth: this.$el.querySelector('.isotope-grid__sizer'),
              },
            });

            setInterval(this.layoutIsotope, 2000);
          });
        }
      }
    },

    methods: {
      layoutIsotope () {
        if (this.isotope) {
          this.isotope.layout();
        }
      },
    },
  };
</script>

<style lang="scss">

</style>
