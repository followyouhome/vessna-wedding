<template>
  <div :class="['promo', 'module-subscribe', this.state.request ? 'module-subscribe--request' : '', this.fadein ? 'promo--fade-in' : '', this.fadeout ? 'promo--fade-out' : '']" v-if="show">
    <div class="module__wrapper module-subscribe__wrapper" v-if="!state.success && !state.error">
      <h2 class="module__headline module-subscribe__headline">{{label.headline}}</h2>
      <p class="module__subline module-subscribe__subline">{{label.subline}}</p>
      <form class="module-subscribe__form" v-on:submit.prevent="subscribe">
        <input class="module-subscribe__form-input" type="email" placeholder="EMAIL" v-model="email" :disabled="state.request">
        <input class="module-subscribe__form-submit" type="submit" value="Подписаться" :disabled="state.request">
      </form>
    </div>
    <div class="module__wrapper module-subscribe__wrapper" v-if="state.success">
      <h2 class="module__headline module-subscribe__headline">{{success.headline}}</h2>
      <p class="module__subline module-subscribe__subline">{{success.subline}}</p>
    </div>
    <div class="module__wrapper module-subscribe__wrapper" v-if="state.error">
      <h2 class="module__headline module-subscribe__headline">{{error.headline}}</h2>
      <p class="module__subline module-subscribe__subline">{{error.subline}}</p>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  import Module from './module.vue';

  import { COOKIES } from '@/../config/constants.js';

  export default {
    name: 'ModuleSubscribe',

    extends: Module,

    data () {
      return {
        show: true,
        email: '',
        fadein: true,
        fadeout: false,
        state: {
          request: false,
          success: false,
          error: false,
        },
        label: {
          headline: 'Сделайте первый шаг',
          subline: 'Будьте в курсе наших акций, ивентов и новостей',
        },
        error: {
          headline: 'Произошла ошибка',
          subline: 'Попробуйте повторить свой запрос позже',
        },
        success: {
          headline: 'Вы подписаны',
          subline: 'Будем оставаться на связи',
        },
      };
    },

    computed: {
      isSubscribed () {
        return this.$store.state.user.access && this.$store.state.user.access.subscription || Vue.cookies.get(COOKIES.STATE_USER_SUBSCRIBED);
      },
    },

    methods: {
      subscribe () {
        this.state.request = true;

        this.$store.dispatch('subscribe', { email: this.email })
          .then(() => {
            this.state.success = true;
          })
          .catch(() => {
            this.state.error = true;
          })
          .finally(() => {
            this.state.request = false;

            setTimeout(() => {
              this.fadeout = true;
            }, 2000);

            setTimeout(() => {
              this.show = false;
            }, 2500);
          });
      },
    },

    mounted () {
      if (this.isSubscribed) {
        this.show = false;
      } else {
        this.email = this.$store.state.user.email || 'vladislav1@vessna.by';
      }
    },
  };
</script>

<style lang="scss">
  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 28px 0;
    }
  }

  .module-subscribe {
    min-height: 410px;
    border: none;
    border-top: 1px solid $gray2;
    background: $white2;

    @media #{$tablet} {
      display: none;
    }
  }

  .module-subscribe__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 30px;
    background: none;
  }

  .module-subscribe__headline {
    margin-bottom: 30px;
    font: 4rem/1em 'Akzidenz Grotesk';
    letter-spacing: 5px;
    color: $black;
  }

  .module-subscribe__subline {
    margin: 10px 20px 25px;
    font: 1rem/1em 'Akzidenz Grotesk';
    letter-spacing: 2px;
    color: $black;
  }

  .module-subscribe__form {
    display: inline-block;
    position: relative;
    width: 70%;
  }

  .module-subscribe__form-input {
    display: block;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px 0 10px;
    border: 1px solid $black;
    font: 2rem/4rem 'Akzidenz Grotesk';
    letter-spacing: 2px;
    color: $black;

    .module-subscribe--request & {
      background-image: repeating-linear-gradient(-45deg, $white, $white 11px, $gray1 10px, $gray1 20px);
      background-size: 28px 28px;
      animation: move .5s linear infinite;
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      opacity: 0.5;
    }
  }

  .module-subscribe__form-submit {
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

    &:focus {
      outline: none;
    }

    &:disabled {
      opacity: 0.5;
    }
  }

</style>
