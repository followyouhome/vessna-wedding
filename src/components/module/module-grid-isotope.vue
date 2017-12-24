<template>

</template>

<script>
  import isMobile from 'ismobilejs';

  export default {
    name: 'module-grid--isotope',

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

<style>

</style>
