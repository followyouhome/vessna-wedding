<template>
  <main class="dress-listing isotope-grid">
      <div class="isotope-grid__sizer"></div>
      <promo-dress v-for="dress in collection.dresses" v-bind:promo="dress"></promo-dress>
  </main>
</template>

<script>
  import PromoDress from '../promo/promo-dress.vue';

  import isMobile from 'ismobilejs';

  export default {
    name: 'module-dress-grid',

    props: ['collection'],

    components: {
      'promo-dress': PromoDress,
    },
    
    mounted () {
      if(__VUE_ENV__ === 'client') {
        if (!isMobile.phone) {
          
          var isotope = document.querySelectorAll('.isotope-grid');

          window.events = window.events || {};
          window.events.isotopeLayout = new CustomEvent('isotopeLayout');

          require.ensure(['isotope-layout'], function(require) {
            var Isotope = require('isotope-layout');

            Array.from(isotope).forEach(function (element) {
                var gallery = new Isotope(element, {
                    itemSelector: '.promo',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: document.querySelector('.isotope-grid .isotope-grid__sizer')
                    }
                });

                window.addEventListener('isotopeLayout', function() {
                    gallery.layout();
                });
            });  

            setInterval(function() {
                window.dispatchEvent(window.events.isotopeLayout);
            }, 1000);
          });
        }
      }
    }
  }
</script>

<style lang="scss">
  .dress-listing {
    margin: 10px;

    @media #{$tablet} {
      margin: 0;
    }

    // .clearfix;

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
