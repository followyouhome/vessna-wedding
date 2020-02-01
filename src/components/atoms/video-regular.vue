<template>
  <figure
    ref="wrapper"
    class="video-regular"
    :style="style"
  >
    <amp-video v-if="amp"
      loop
      autoplay
      width="1280"
      height="720"
      layout="responsive"
    >
      <source
        v-if="webm.url"
        :src="webm.url"
        type="video/webm"
      >
      <source
        v-if="mp4.url"
        :src="mp4.url"
        type="video/mp4"
      >
      <source
        v-if="ogv.url"
        :src="ogv.url"
        type="video/ogg"
      >
    </amp-video>
    <video v-else
      v-show="show"
      ref="video"
      class="video-regular__video"
      playsinline
      autoplay
      loop
      muted
      preload="none"
      :src="mp4.url"
    >
      <source
        v-if="webm.url"
        :src="webm.url"
        type="video/webm; codecs=&quot;vp8, vorbis&quot;"
      >
      <source
        v-if="mp4.url"
        :src="mp4.url"
        type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"
      >
      <source
        v-if="ogv.url"
        :src="ogv.url"
        type="video/ogg; codecs=&quot;theora, vorbis&quot;"
      >
    </video>
  </figure>
</template>

<script>
  export default {
    name: 'VideoRegular',

    props: ['promo'],

    data () {
      return {
        show: false,
        pixel: __VUE_ENV__ === 'client' ? window.devicePixelRatio : null,
      };
    },

    computed: {
      amp () {
        return this.$store && this.$store.state && this.$store.state.settings && this.$store.state.settings.amp;
      },

      poster () {
        return this.promo.image && this.promo.image.url;
      },

      width () {
        return __VUE_ENV__ === 'client' ? this.$el && this.$el.offsetWidth * this.pixel : null;
      },

      url () {
        if (this.poster) {
          return this.poster + (this.width ? `?w=${this.width}` : '');
        } else {
          return '';
        }
      },

      style () {
        return __VUE_ENV__ === 'client' ? `background-image: url(${this.url});` : '';
      },

      webm () {
        return this.promo.video && this.promo.video.webm;
      },

      mp4 () {
        return this.promo.video && this.promo.video.mp4;
      },

      ogv () {
        return this.promo.video && this.promo.video.ogv;
      },
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        this.$refs.wrapper.setAttribute('style', this.style);
        setTimeout (() => {
          this.show = true;

          this.$refs.video && this.$refs.video.addEventListener('loadeddata', function () {
            this.play();
          }, 2000);
        });
      }
    },
  };
</script>

<style lang="scss">
  @keyframes show {
    from {opacity: 0; }
    to { opacity: 1; }
  }

  .video-regular {
    margin: 0;
    width: 100%;
    font-size: 0;
    letter-spacing: 0;
    background: transparent 50% 50% / cover no-repeat;
  }

  .video-regular__video {
      width: 100%;
      animation: show 0.5s forwards;
  }
</style>

<story group="Atoms" name="Video Regular">
  <video-regular
    :promo="{
      media: 'video',
      image: {
        width: 1920,
        height: 1200,
        resource_type: 'image',
        url: 'http://vessna.wedding/images/vessna-2019-collection.jpg',
      },
      audio: {},
      video: {
        webm: {
          mimetype: 'video/webm',
          filename: 'vessna-2019-web.webm',
          size: 563288,
          etag: '\'0x8D682595FF6F5F8\'',
          container: 'vessna',
          url: 'https://vessna.blob.core.windows.net/vessna/vessna-2019-web.webm'
        },
        mp4: {
          mimetype: 'video/mp4',
          filename: 'vessna-2019-web.mp4',
          size: 573831,
          etag: '\'0x8D682595FADAAC3\'',
          container: 'vessna',
          url: 'https://vessna.blob.core.windows.net/vessna/vessna-2019-web.mp4'
        },
        ogv: {
          mimetype: 'video/ogg',
          filename: 'vessna-2019-web.ogv',
          size: 514538,
          etag: '\'0x8D682595FBDDA4F\'',
          container: 'vessna',
          url: 'https://vessna.blob.core.windows.net/vessna/vessna-2019-web.ogv'
        }
      },
      text: '<p>Тенденция раздельного наряда продолжает набирать обороты, так как купить шикарное платье на один раз могут себе позволить немногие.</p>\r\n<p>В то время, как раздельный наряд, состоящий из юбки и топа или корсета можно не раз обыграть в менее торжественных случаях. И именно это ценится нашими клиентами. Кружевные лифы в самом разнообразном исполнении сочетаются с длинными струящимися атласными юбками, либо с пышными юбками миди и в пол. К любому топу в этой коллекции можно предложить не менее пяти вариантов юбок различного исполнения на практически любой вкус клиента &ndash; от мини до макси, от прямых до пышных.</p>\r\n<p>Многие модели замечательно подходят не только для выпускниц, но и для их мам. И подобрать наряд в стиле &laquo;мама+дочка&raquo; - тоже замечательная возможность обратить на себя внимание.</p>',
      subline: 'Вечерняя коллекция этого года',
      headline: 'Vessna 2019'
    }"
  />
</story>
