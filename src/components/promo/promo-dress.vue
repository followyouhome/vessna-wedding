<template>
  <div class="promo promo-dress promo--width-2">
    <div class="promo__wrapper promo-dress__wrapper">
      <a 
        ref="fresco"
        class="promo__image-wrapper promo-dress__image-wrapper promo-dress__image-wrapper--no-link"
        v-if="dress.promo.image"
        v-bind:data-dress-info="images"
        v-bind:data-fresco-group="dress.headline"
        v-bind:data-fresco-group-options="options"
      >
        <image-deferred v-bind:image="dress.promo.image"></image-deferred>
      </a>
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
</template>

<script>
  import Promo from './promo';

  import '@/lib/fresco.css';


  export default {
    name: 'PromoDress',

    extends: Promo,

    props: ['dress'],

    computed: {
      options () {
        return 'overflow: true, thumbnails: \"vertical\", onClick: \"close\"';
      },

      images () {
        return "[" + this.dress.images.map(element => "\"" + element.url + "\"") + "]";
      },

      price () {
        const currency = this.$store && this.$store.state && this.$store.state.user && this.$store.state.user.access && this.$store.state.user.access.currency;
        const show = this.$store && this.$store.state && this.$store.state.settings && this.$store.state.settings.prices;

        return show && currency && this.dress.price && this.dress.price[currency] && this.formatPrice(this.dress.price[currency], currency);
      },
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        const Fresco = require('@/lib/fresco.js');
        const element = this.$refs.fresco;

        if (element) {
          element.addEventListener('click', event => {
    				event.preventDefault();
    				event.stopImmediatePropagation();

    				let photos = JSON.parse(element.dataset.dressInfo);

    				Fresco.show(photos, {
    					overflow: true,
    					thumbnails: 'vertical',
    					onClick: 'close',
    				});
    			});
        }
      }
    },

    methods: {
      formatPrice (price, currency) {
        switch (currency) {
          case 'rub': {
            return `${price} ₽`;
          } break;
          case 'usd': {
            return `$${price}`;
          } break;
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

  .promo-dress--no-link {
    .promo-dress__image-wrapper {
      cursor: zoom-in;
    }
  }

  .promo-dress--show-lightbox {
    .promo-dress__image-wrapper {
      cursor: zoom-in;
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
    img {
      height: 100% !important;
    }
  }

  .fresco {
    cursor: zoom-in;
  }
</style>

<story group="Promos" name="Dress" notes="This is cool" knobs="{buttonText: text('Button text', 'initial value')}">
  <promo-dress
    :dress="{
      slug: '1701',
      name: '1701',
      price: {
        rub: 11000,
        usd: 165,
      },
      images: [{
        url: 'http://vessna.wedding/images/qqsqtopifxboaykgaq7a.jpg',
        width: 1620,
        height: 1080,
      }, {
        url: 'http://vessna.wedding/images/lziu0zfzmpnfe4hp6jr8.jpg',
        width: 720,
        height: 1080,
      }],
      promo: {
        alt: '',
        headline: '1701',
        subline: 'Princess',
        media: 'image',
        image: {
          width: 720,
          height: 1080,
          url: 'http://vessna.wedding/images/1701-svadebnye-platya-pyshnye-foto.jpg',
        },
      },
    }"
  />
</story>
