<template>
  <b-container class="module module-image-carousel">
    <b-carousel
      class="module-image-carousel__carousel"
      :interval="400000"
      controls
      indicators
    >
      <b-carousel-slide
        v-for="image in images"
        :key="image.url"
        img-blank
      >
        <image-deferred :image="image"/>
      </b-carousel-slide>
    </b-carousel>
  </b-container>
</template>

<script>
  import Module from './module';

  export default {
    name: 'ModuleImageCarousel',

    props: ['images'],

    data () {
      return {

      }
    },

    computed: {
      height () {
        if (__VUE_ENV__ === 'client') {
          return this.$parent.$el - 100;
        }

        return '100%';
      }
    }
  }
</script>

<style lang="scss">
  .module-image-carousel {
    height: 100%;
    overflow: hidden;
  }

  .module-image-carousel__carousel {
    margin: 20px 30px;
    height: 100%;
    overflow: hidden;

    .carousel-caption {
      height: 100%;
    }

    .carousel-inner {
      height: 100%;
    }

    .carousel-item {
      height: 100%;
    }

    .image-deferred {
      position: absolute;
      height: 100%;
      width: 100%;
      margin: auto;
    }
  }
</style>

<story group="Modules" name="Image Carousel">
  <module-image-carousel
    :images="[{
      width: 1120,
      height: 1680,
      secure_url: 'https://vessna.wedding/images/ABSFPUXIIIQ50TPXCGRU.JPG',
      url: 'https://vessna.wedding/images/ABSFPUXIIIQ50TPXCGRU.JPG',
    }, {
      width: 1120,
      height: 1680,
      secure_url: 'https://vessna.wedding/images/AO3JKEL5CGJ7K22XBY1V.JPG',
      url: 'https://vessna.wedding/images/AO3JKEL5CGJ7K22XBY1V.JPG',
    }, {
      width: 1120,
      height: 1680,
      secure_url: 'https://vessna.wedding/images/EF08HSAQTU0V0DCZPVES.JPG',
      url: 'https://vessna.wedding/images/EF08HSAQTU0V0DCZPVES.JPG',
    }]"
  />
</story>
