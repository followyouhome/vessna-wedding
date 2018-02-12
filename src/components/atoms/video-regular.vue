<template>
  <figure class="video-regular" :style="`background-image: url(${poster});`">
    <no-ssr>
    	<video class="video-regular__video" autoplay loop muted preload="none" ref="video" v-if="webm.url" v-bind:src="webm.url">
    		<source v-if="webm.url" v-bind:src="webm.url" type='video/webm; codecs="vp8, vorbis"'>
    		<source v-if="mp4.url" v-bind:src="mp4.url" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
    		<source v-if="ogv.url" v-bind:src="ogv.url" type='video/ogg; codecs="theora, vorbis"'>
    	</video>
    </no-ssr>
  </figure>
</template>

<script>
  export default {
    name: 'video-regular',

    props: ['promo'],

    computed: {
      poster () {
        return this.promo.image && this.promo.image .secure_url;
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
      this.$refs.video.addEventListener('loadeddata', function() {
        this.play();
      }, false);
    },
  };
</script>

<style lang="scss">
  @keyframes show {
    from {opacity: 0; }
    to { opacity: 1; }
  }

  .video-regular {
    background: transparent 50% 50% / cover no-repeat;
  }

  video {
    animation: show 0.5s forwards;
  }
</style>
