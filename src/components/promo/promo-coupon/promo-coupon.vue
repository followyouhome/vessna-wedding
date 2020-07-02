<template>
  <div class="promo promo-coupon">
    <image-deferred class="promo-coupon__image" :image="image"/>
    <div class="promo-coupon__card">
      <h3 class="promo-coupon__headline">{{headline}}</h3>
      <h4 class="promo-coupon__subline">{{subline}}</h4>
      <p class="promo-coupon__copy">{{copy}}</p>
    </div>
  </div>
</template>

<script>
  import Promo from '../promo';

  export default {
    name: 'PromoCoupon',

    extends: Promo,

    props: ['item'],

    data () {
      return {
        headline: 'Это сайт для оптовых клиентов',
        subline: 'Если ты в поисках своего платья забрела аж сюда - мы дарим промокод <strong>VESSNAFORYOU</strong> на скидку в нашем интернет-магазине',
        copy: 'Потому что любые старания должны быть вознаграждены',
        image: {
          height: 683,
          width: 1024,
          url: 'https://vessna.wedding/images/news/vessna-coupon.jpg',
        },
      };
    },
  };
</script>

<style lang="scss">
  .promo-coupon {
    height: 100%;
    max-width: 600px;
    max-height: 600px;
  }

  .promo-coupon__image {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: $z-default;
  }

  .promo-coupon__card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    padding: 20px;
    margin: auto;
    height: 100%;
    width: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    background: $glass;
    z-index: $z-default + 2;
  }

  .promo-coupon__headline {
    width: 100%;
    margin: 0px 0 20px;
    font: 1.5rem/2rem $RistrettoProLight;
    text-align: center;
  }

  .promo-coupon__subline {
    width: 100%;
    margin: 0px 0 20px;
    font: 1.2rem/1.5rem $RistrettoProLight;
    text-align: center;
    letter-spacing: 2px;
  }

  .promo-coupon__copy {
    width: 100%;
    font-size: 0.8rem;
    text-align: center;
  }
</style>
