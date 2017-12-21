<template>
  <figure v-bind:class="['image-deferred', 'image-deferred--preloader', aspect]" v-bind:style="size" v-if="image">
    <noscript>
      <img v-bind:src="image.url" alt="" title="" itemprop="contentUrl">
    </noscript>
    <div class="image-deferred__image image-deferred__image--preloader" v-bind:data-src="image.url" data-alt="" data-title=""></div>
  </figure>
</template>

<script>
  export default {
    name: 'image-deferred',

    props: ['image', 'aspect'],

    computed: {
      size: function() {
        if(this.aspect) {
          return "padding-top: 0;";
        } else {
          return "padding-top: " + this.image.height / this.image.width * 100 + "%";
        }
      }
    },

    mounted () {
      console.log("image deffered");
      if(__VUE_ENV__ === 'client') {
        const Imager = require('imager.js');
        var imgrPlaceholder =  new Imager('.image-deferred__image--preloader', {
          className: 'image-deferred__image image-deferred__image--loaded',
          lazyload: true,
          onImagesReplaced: function(images) {
            images.forEach(function(image) {
              var parent = image.parentNode;

              image.addEventListener('load', function(e) {
                parent.classList.add('image--effect-fadein');
                parent.classList.remove('image-deferred--preloader'); //Remove background image


                // var p = new Parallax('.image-parallax .image-deferred__image--loaded', {
                //     offsetYBounds: 50,
                //     intensity: 30,
                //     center: 1,
                //     safeHeight: 0.15
                // }).init();

              });
            });
          },
          availableWidths: function(image) {
            return image.clientWidth;
          }
        })
      }
    }
  }
</script>

<style>

</style>
