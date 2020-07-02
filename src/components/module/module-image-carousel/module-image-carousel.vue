<template>
  <b-container class="module module-dress-info">
    <div class="module-dress-info__carousel" ref="carousel">
      <div class="module-dress-info__image" v-for="image in images">
        <image-deferred class="" :image="image" :key="image.url"/>
      </div>
    </div>
    <div class="module-dress-info__info">
      <div class="module-dress-info__info-wrapper">
        <h2 class="module-dress-info__title">{{name}}</h2>
        <h4 class="module-dress-info__subline" v-if="features">Особенности</h4>
        <p class="module-dress-info__copy" v-if="features">{{features}}</p>
        <h4 class="module-dress-info__subline" v-if="description">Описание</h4>
        <p class="module-dress-info__copy" v-if="description">{{description}}</p>
        <h4 class="module-dress-info__subline" v-if="colors">Цвета</h4>
        <p class="module-dress-info__copy" v-if="colors">{{colors}}</p>
        <h4 class="module-dress-info__subline" v-if="price">Стоимость</h4>
        <p class="module-dress-info__copy" v-if="price">{{price}}</p>
      </div>
    </div>
  </b-container>
</template>

<script>
  import Module from '../module';

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
      images () {
        return this.dress.images;
      },

      currency () {
        return this.$store && this.$store.state && this.$store.state.user && this.$store.state.user.access && this.$store.state.user.access.currency;
      },

      price () {
        if (this.currency) {
          return this.dress.price[this.currency];
        }

        return null;
      },

      name () {
        return this.dress.name;
      },

      description () {
        return this.dress.description;
      },

      name () {
        return this.dress.name;
      },

      features () {
        return this.dress.features;
      },

      colors () {
        return this.dress && this.dress.colors;
      },
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        const Flickity = require('flickity');
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
          pageDots: false,
          resize: true,
          setGallerySize: true,
          wrapAround: false,
        });

        this.flickity.resize();

        setTimeout(() => {
            this.flickity.resize();
        }, 3000);
      }
    },
  };
</script>

<style lang="scss">
  .popup-image-carousel {
    overflow: scroll;
  }

  .module-dress-info {
    display: flex;
    height: 100%;
    overflow: hidden;

    @media #{$phablet} {
      height: auto;
      padding: 0;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .module-dress-info__carousel {
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;

    @media #{$phablet} {
      width: 100%;
      height: 60vh;
    }

    .flickity-viewport {
      height: 100%;
    }

    .flickity-slider {
      height: 100%;
    }

    .flickity-prev-next-button {
      position: absolute;
      margin: auto;
      bottom: 10%;
      width: 40px;
      height: 40px;

      &:disabled {
        opacity: 0.6;
      }

      &.previous {
        left: 10%;
      }

      &.next {
        right: 10%;
      }

      .flickity-button-icon {
        height: 60%;
        width: 60%;
        top: 0;
        bottom: 0;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
      }
    }

    .image-deferred {
      padding-top: 0;

      @media #{$phablet} {
        padding-top: 150%;
      }
    }
  }

  .module-dress-info__image {
    height: 100%;
    width: 100%;

    .image-deferred {
      width: 100%;
      height: 100%;
      padding-top: 0;

      img {
        height: 100%;
        width: auto;
        left: 0;
        right: 0;
      }
    }
  }

  .module-dress-info__info {
    width: 50%;
    background: $white;

    @media #{$phablet} {
      width: 100%;
    }
  }

  .module-dress-info__info-wrapper {
    padding: 2rem;
  }

  .module-dress-info__title {
    text-align: center;
    font: 3rem/1 $RistrettoProLight;
    color: $black;
  }

  .module-dress-info__subline {
    margin: 0.5rem 0;
    letter-spacing: 1px;
    font: 1.5rem/1 $RistrettoProLight;
    color: $dark5;
  }
</style>
