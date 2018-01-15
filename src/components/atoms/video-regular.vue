<template>
  <figure class="video-regular">
  	<video class="video-regular__video" autoplay loop v-bind:poster="video.poster">
  		<source v-bind:src="video.webm.url" type='video/webm; codecs="vp8, vorbis"'>
  		<source v-bind:src="video.mp4.url" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  		<source v-bind:src="video.ogv.url" type='video/ogg; codecs="theora, vorbis"'>
  	</video>
  	<figcaption>
  		<h5>[[+headline]]</span></h5>
  		<p>[[+subline]]</p>
  	</figcaption>
  </figure>
</template>

<script>
  export default {
    name: 'video-regular',

    props: ['video'],

    computed: {

    },
  };
</script>

<style>

</style>
