<template>
  <div class="promo promo-dress promo--width-2" @click="click" v-if="!amp">
    <div class="promo__wrapper promo-dress__wrapper">
      <div class="promo__image-wrapper promo-dress__image-wrapper">
        <image-deferred v-bind:image="dress.promo.image"></image-deferred>
      </div>
      <div class="promo__content-wrapper promo-dress__content-wrapper">
        <div class="promo-dress__headline promo-dress__headline--no-link">
           <h4 class="promo__text-headline"><span class="font-peignot">{{dress.promo.headline}}</span></h4>
        </div>
        <div class="promo-dress__subheadline">
           <p class="promo__text-subheadline">{{dress.promo.subline}}</p>
           <no-ssr><p class="font-peignot" v-if="price">{{price}}</p></no-ssr>
        </div>
      </div>
    </div>
  </div>
  <div class="promo promo--width-2" v-else>
    <div class="promo__image-wrapper promo-dress__image-wrapper">
      <div class="promo__wrapper promo-dress__wrapper">
        <div class="promo__image-wrapper promo-dress__image-wrapper">
          <amp-carousel lightbox width="1" height="1.5" layout="responsive" type="slides">
            <image-deferred :image="dress.promo.image" :ampLightbox="dress.promo.headline"/>
            <image-deferred v-for="image in images" :image="image" :ampLightbox="dress.promo.headline" :key="image.src"/>
          </amp-carousel>
        </div>
        <div class="promo__content-wrapper promo-dress__content-wrapper">
          <div class="promo-dress__headline promo-dress__headline--no-link">
             <h4 class="promo__text-headline"><span class="font-peignot">{{dress.promo.headline}}</span></h4>
          </div>
          <div class="promo-dress__subheadline">
             <p class="promo__text-subheadline">{{dress.promo.subline}}</p>
             <no-ssr><p class="font-peignot" v-if="price">{{price}}</p></no-ssr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Promo from '../promo';

  export default {
    name: 'PromoDress',

    extends: Promo,

    props: ['dress'],

    computed: {
      options () {
        return 'overflow: true, thumbnails: \"vertical\", onClick: \"close\"';
      },

      images () {
        return this.dress.images;
      },

      price () {
        const currency = this.$store && this.$store.state && this.$store.state.user && this.$store.state.user.access && this.$store.state.user.access.currency;
        const show = this.$store && this.$store.state && this.$store.state.settings && this.$store.state.settings.prices;

        return show && currency && this.dress.price && this.dress.price[currency] && this.formatPrice(this.dress.price[currency], currency);
      },
    },

    methods: {
      click () {
        this.$store.commit('POPUP_SET', {
          popup: 'popup-image-carousel',
          payload: {
            dress: this.dress,
          },
        });
      },

      formatPrice (price, currency) {
        switch (currency) {
          case 'rub': {
            return `${price} ₽`;
          } break;
          case 'usd': {
            return `$${price}`;
          } break;
          default: {
            return `${price}`;
            break;
          }
        };
      },
    },
  };
</script>

<style lang="scss">
  .promo-dress {
    width: 300px;

    .image-deferred {
      width: auto;
    }
  }

  .promo-dress__content-wrapper {
    position: relative;
    padding: 25px 40px 20px;
    min-height: 70px;
    width: 100%;

    @media #{$tablet} {
      padding: 10px 20px 20px;

    }

    @media #{$phablet} {
      padding: 10px 15px 15px;
      min-height: 70px;
    }
  }

  .promo-dress__headline {
    display: block;
    min-height: 24px;
    text-decoration: none;
    text-align: left;
    color: $dark;
  }

  .promo-dress__subheadline {
    display: block;
    min-height: 20px;
    text-align: right;
  }

  .promo-dress__image-wrapper {
    cursor: zoom-in;

    img {
      height: 100%;
    }
  }
</style>
