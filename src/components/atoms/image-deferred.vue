<template>
  <figure class="image-deferred" v-if="amp">
    <amp-img alt="A view of the sea"
      :src="url"
      width="1"
      height="1"
      layout="responsive">
    </amp-img>
  </figure>
  <figure v-bind:class="['image-deferred', 'image-deferred--preloader', aspect, parsedEffects]" :style="size" v-else>
    <img :class="['image-deferred__image', 'image-deferred__image--preloader']"
      v-if="show"
      v-lazy="url"
      alt=""
      title=""
      itemprop="contentUrl"
    />
    <noscript v-if="server"><img :src="image.secure_url || image.url" alt="" title="" itemprop="contentUrl"></noscript>
    <noscript v-else></noscript>
  </figure>
</template>

<script>
  const domain = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://vessna.wedding';

  export default {
    name: 'ImageDeferred',

    props: ['image', 'aspect', 'effect'],

    data () {
      return {
        show: false,
        server: __VUE_ENV__ === 'server' ? true : false,
        pixel: __VUE_ENV__ === 'client' ? window.devicePixelRatio : null,
      };
    },

    computed: {
      amp () {
        return this.$store && this.$store.state && this.$store.state.settings && this.$store.state.settings.amp;
      },

      size () {
        if (this.aspect) {
          return '';
        } else {
          return "padding-top: " + this.image.height / this.image.width * 100 + "%";
        }
      },

      parsedEffects () {
          return typeof this.effect === 'string' ? this.effect.split(' ').map(effect => `image--effect-${effect}`).join(' ') : '';
      },

      width () {
        return __VUE_ENV__ === 'client' ? this.$el && this.$el.offsetWidth * this.pixel : null;
      },

      src () {
        return this.image.secure_url || this.image.url;
      },

      url: function () {
        console.log(this.src);
        const url = new URL(this.src, domain);

        if (this.width) {
          url.searchParams.append('w', this.width)
        }

        return url.href;
      },
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        this.show = true;

        this.$Lazyload.$on('loaded', function ({ el }) {
          el.parentNode.style.animationDuration = `${Math.random()}s`;
          el.parentNode.classList.add('image--effect-fadein');
          el.parentNode.classList.remove('image-deferred--preloader');
        });
      }
    },
  };
</script>

<style lang="scss">
  @include animation-show-image();

  .image-deferred {
    position: relative;
    overflow: hidden;
    margin: 0;

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

  .image-deffered--size-1-1:before {
    padding-top: 100%;
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
  .image-deferred img {
    position: absolute;
    margin: auto;
    width: 100%;
    bottom:0;
    left: 0;
    top:0;
  }

  .image--effect-fadein {
    animation-name: animation-show-image;
    animation-direction: normal;
  }

  .image--effect-zoom-out {
    img {
      transition: transform linear 0.2s;
      transform: scale(1.05);
    }

    &:hover img {
      transform: scale(1);
    }
  }
</style>

<story group="Atoms" name="Image Deferred">
  <image-deferred
    :size="'image-deffered--size-2-3'"
    :image="{
      width:1920,
      height:1200,
      url:'http://res.cloudinary.com/vessna/image/upload/v1548800751/vessna-2019-preview.jpg',
      secure_url:'https://res.cloudinary.com/vessna/image/upload/v1548800751/vessna-2019-preview.jpg'
    }"
  />
</story>
