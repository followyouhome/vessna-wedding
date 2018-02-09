<template>
  <figure class="video-regular">
  	<video class="video-regular__video" autoplay loop ref="video" v-bind:poster="video.poster" v-if="webm.url" v-bind:src="webm.url">
  		<source v-if="webm.url" v-bind:src="webm.url" type='video/webm; codecs="vp8, vorbis"'>
  		<source v-if="mp4.url" v-bind:src="mp4.url" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  		<source v-if="ogv.url" v-bind:src="ogv.url" type='video/ogg; codecs="theora, vorbis"'>
  	</video>
  </figure>
</template>

<script>
  export default {
    name: 'video-regular',

    props: ['video'],

    computed: {
      webm () {
        return this.video.webm;
      },
      mp4 () {
        return this.video.mp4;
      },
      ogv () {
        return this.video.ogv;
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

</style>
