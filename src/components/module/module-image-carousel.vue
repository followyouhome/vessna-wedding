<template>
  <b-container class="module module-dress-info">
    <div class="module-dress-info__carousel" ref="carousel">
      <div class="module-dress-info__image" v-for="image in images">
        <image-deferred class="" :image="image" :key="image.url"/>
      </div>
    </div>
    <div class="module-dress-info__info">
      <h2 class="module-dress-info__title">{{name}}</h2>
    </div>
  </b-container>
</template>

<script>
  import Module from './module';

  import Flickity from 'flickity';

  export default {
    name: 'ModuleImageCarousel',

    extends: Module,

    props: ['dress'],

    data () {
      return {
        flickity: null,
      };
    },

    computed: {
      currency () {
        return this.$store && this.$store.state && this.$store.state.user && this.$store.state.user.access && this.$store.state.user.access.currency;
      },

      price () {
        if (this.currency) {
          return this.dress[this.currency];
        }

        return null;
      },

      name () {
        return this.dress.name;
      },

      images () {
        return this.dress && this.dress.images;
      },
    },

    mounted () {
      this.flickity = new Flickity(this.$refs.carousel, {
        accessibility: true,
        adaptiveHeight: false,
        autoPlay: false,
        cellAlign: 'center',
        cellSelector: '.module-dress-info__image',
        contain: false,
        draggable: true,
        lazyLoad: false,
        percentPosition: true,
        prevNextButtons: true,
        pageDots: true,
        resize: true,
        setGallerySize: true,
        wrapAround: false,
      });

      this.flickity.resize();

      setTimeout(() => {
          this.flickity.resize();
      }, 3000);
    },
  };
</script>

<style lang="scss">
  .module-dress-info {
    display: flex;
    height: 100%;
    overflow: hidden;
  }

  .module-dress-info__carousel {
    width: 50%;
    overflow: hidden;

    .flickity-viewport {
      height: 100% !important;
    }

    .flickity-slider {
      height: 100% !important;
    }
  }

  .module-dress-info__image {
    width: 100%;

    .image-deferred {
      height: 100%;
    }
  }

  .module-dress-info__info {
    width: 50%;
  }

  .module-dress-info__title {
    text-align: center;
    font: 3rem/1 $RistrettoProLight;
    color: $black;
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
