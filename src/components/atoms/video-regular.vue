<template>
  <figure class="video-regular">
  	<video class="video-regular__video" autoplay loop poster="video.poster">
  		<source src="video.webm" type='video/webm; codecs="vp8, vorbis"'>
  		<source src="video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  		<source src="video.ogv" type='video/ogg; codecs="theora, vorbis"'>
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

    }

  }
</script>

<style>

</style>
