<template>
  <div :class="['promo', 'promo-subscribe', this.fadein ? 'promo--fade-in' : '']">
    <div class="promo__wrapper promo-subscribe__wrapper">
      <h2 class="promo__headline promo-subscribe__headline">{{headline}}</h2>
      <p class="promo__subline promo-subscribe__subline">{{subline}}</p>
      <form class="promo-subscribe__form" v-on:submit.prevent="subscribe">
        <input class="promo-subscribe__form-input" type="email" placeholder="EMAIL" v-model="email">
        <input class="promo-subscribe__form-submit" type="submit" value="Подписаться">
      </form>
    </div>
  </div>
</template>

<script>
  import Promo from './promo.vue';

  export default {
    name: 'promo-subscribe',

    extends: Promo,

    data () {
      return {
        fadein: true,
        headline: 'Сделайте первый шаг',
        subline: 'Будьте в курсе наших акций, ивентов и новостей',
        email: '',
      };
    },

    methods: {
      subscribe () {
        this.$store.dispatch('subscribe', { email: this.email })
          .then((data) => {
            console.log(data);
          });
      },
    },
  };
</script>

<style scoped lang="scss">
  .promo-subscribe {
    border: none;
    border-top: 1px solid $gray2;
    background: $white2;

    @media #{$tablet} {
      display: none;
    }
  }

  .promo-subscribe__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 30px;
    background: none;
  }

  .promo-subscribe__headline {
    margin-bottom: 30px;
    font: 4rem/1em 'Akzidenz Grotesk';
    letter-spacing: 5px;
    color: $black;
  }

  .promo-subscribe__subline {
    margin: 10px 20px 25px;
    font: 1rem/1em 'Akzidenz Grotesk';
    letter-spacing: 2px;
    color: $black;
  }

  .promo-subscribe__form {
    display: inline-block;
    position: relative;
    width: 70%;
  }

  .promo-subscribe__form-input {
    display: block;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px 0 10px;
    border: 1px solid $black;
    font: 2rem/4rem 'Akzidenz Grotesk';
    letter-spacing: 2px;
    color: $black;

    &:focus {
      outline: none;
    }
  }

  .promo-subscribe__form-submit {
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    font-size: 2rem;
    padding: 0 20px;
    vertical-align: middle;
    background: #1c1d21 url("/public/images/icons/icon-arrow-right-white.svg") no-repeat center;
    border: 20px solid rgb(28,29,34);
    text-indent: -9999px;

    &:hover {
      opacity: 0.8;
    }
  }

</style>
