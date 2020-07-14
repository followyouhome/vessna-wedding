<template>
  <figure
    v-if="!amp"
    :class="['image-deferred', 'image-deferred--preloader', aspect, parsedEffects]"
    :style="size"
  >
    <img
      v-if="show"
      ref="img"
      v-lazy="url"
      :class="['image-deferred__image', 'image-deferred__image--preloader']"
      alt=""
      title=""
      itemprop="contentUrl"
    >
    <noscript v-if="server"><img :src="image.secure_url || image.url" alt="" title="" itemprop="contentUrl"></noscript>
    <noscript v-else />
  </figure>
  <figure
    v-else
    class="image-deferred"
  >
    <amp-img
      alt="A view of the sea"
      :src="url"
      :width="image.width"
      :height="image.height"
      layout="responsive"
      :lightbox="ampLightbox"
      :hidden="ampHidden"
      :srcset="`
        ${url}?w=1920 1920w,
        ${url}?w=1680 1680w,
        ${url}?w=1280 1280w,
        ${url}?w=1024 1024w,
        ${url}?w=768 768w,
        ${url}?w=640 640w,
        ${url}?w=480 480w,
      `"
    />
  </figure>
</template>

<script>
  const domain = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://vessna.wedding';

  export default {
    name: 'ImageDeferred',

    props: {
      image: {
        type: Object,
      },
      aspect: {
        type: String,
      },
      effect: {
        type: String,
      },
      /**
       * Add image to AMP lightbox
       */
      ampLightbox: {
        type: String,
        default: undefined,
      },
      /**
       * Hide this image from main view
       */
      ampHidden: {
        type: Boolean,
        default: undefined,
      },
    },

    data () {
      return {
        show: false,
        server: __VUE_ENV__ === 'server' ? true : false,
        pixel: __VUE_ENV__ === 'client' ? window.devicePixelRatio : null,
      };
    },

    computed: {
      turbo () {
        return this.$store && this.$store.state && this.$store.state.settings && this.$store.state.settings.turbo;
      },

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
        return __VUE_ENV__ === 'client' ? this.$el && Math.ceil(this.$el.offsetWidth * this.pixel) : null;
      },

      src () {
        return this.image.secure_url || this.image.url;
      },

      url: function () {
        const url = new URL(this.src, domain);

        if (this.width) {
          url.searchParams.append('w', this.width);
        }

        return url.href;
      },
    },

    watch: {
      image () {
        this.$refs.img.src = this.url;
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

  .image-deffered--size-1-1 {
    padding-top: 100%;
  }

  .image-deffered--size-1-2 {
    padding-top: 40%;
  }

  .image-deffered--size-2-3 {
    padding-top: 150%;
  }

  .image-deffered--size-3-2 {
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

  /**
   * Fix all AMP images with wrong side
   */
  amp-img img {
    object-fit: cover;
  }
</style>
