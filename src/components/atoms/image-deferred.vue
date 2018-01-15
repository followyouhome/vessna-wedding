<template>
  <figure v-bind:class="['image-deferred', 'image-deferred--preloader', aspect]" v-bind:style="size" v-if="image">
    <img class="image-deferred__image image-deferred__image--preloader"
      v-bind:src="image.url"
      alt=""
      title=""
      v-bind:data-src="image.url + '?w={width}'"
      data-alt=""
      data-title=""
      itemprop="contentUrl"
    />
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
      },
    },

    mounted () {
      if(__VUE_ENV__ === 'client') {
        const Imager = require('imager.js');

        return new Imager('.image-deferred__image--preloader', {
          className: 'image-deferred__image image-deferred__image--loaded',
          lazyload: true,
          availableWidths: image => image.clientWidth,
          onImagesReplaced: images => {
            images.forEach(image => {
              image.addEventListener('load', function(e) {
                image.parentNode.classList.add('image--effect-fadein');
                image.parentNode.classList.remove('image-deferred--preloader');

                // var p = new Parallax('.image-parallax .image-deferred__image--loaded', {
                //     offsetYBounds: 50,
                //     intensity: 30,
                //     center: 1,
                //     safeHeight: 0.15
                // }).init();
              });
            });
          },
        }).ready(function() {
          this.checkImagesNeedReplacing(this.divs);
        });
      }
    },
  };
</script>

<style lang="scss">
  @keyframes show-image {
    from {
      transform: translateY(-3rem);                     //Animation from top to bottom looks cool
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .image-deferred {
    position: relative;
    overflow: hidden;
    // width: 300px;

    &:before {
      content: '';
      display: block;
    }
  }

  .image-deferred.fresco {
    cursor: zoom-in;
  }

  .image-deferred--preloader {
    background-image: url("/public/images/watermark.png");
    background-size: 33%;
    background-position: 50%;
  }

  .image-deffered--size-1-2:before {
    padding-top: 40%;
  }

  .image-deffered--size-2-3:before {
    padding-top: 150%;
  }

  .image-deffered--size-3-2:before {
    padding-top: percentage(2 / 3);
  }

  .image-deferred__image,
  .image-deferred img {                             //For non-javascript users
    position: absolute;
    margin: auto;
    width: 100%;
    bottom:0;
    left: 0;
    top:0;
  }

  .image-deferred__image--preloader {

  }

  .image-deferred__image--loaded {
    animation: show-image 0.3s normal;
  }
</style>
