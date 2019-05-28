<template>
  <b-container class="popup">
    <slot name='header'>

    </slot>
    <slot name='body'>

    </slot>
    <slot name='footer'>
      <button class="popup__close" @click="close">×</button>
    </slot>
  </b-container>
</template>

<script>

  export default {
    name: 'v-popup',

    data () {
      return {
        status: {
          recaptcha: false,
          available: true,
          request: false,
          success: false,
          fail: false,
        },
        config: {
          animation: 300,
        },
      };
    },

    mounted () {

    },

    destroyed () {
      window.removeEventListener('keydown', this.keydown);
    },

    methods: {
      close (event) {
        this.status.available = false;

        setTimeout(() => { this.$store.commit('POPUP_UNSET'); }, this.config.animation);
      },

      keydown (event) {
        if (event.keyCode === 27) {
          setTimeout(() => { this.$store.commit('POPUP_UNSET'); }, this.config.animation);
        }
      },
    },
  };
</script>

<style lang="scss">
  @include animation-fade-in('popup');

  .popup {
    position: relative;
    margin: auto;
    animation: animation-fade-in-popup 0.3s normal;
    box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.75);
  }

  .popup__recaptcha {
    position: relative;
    margin: 10px 0;
    width: 302px;
    overflow: hidden;
  }

  .popup__close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: none;
    cursor: pointer;
    background: none;
    z-index: $z-popup + 1;
    font-size: 30px;
    line-height: 30px;

    &:focus {
      outline: none;
    }

    &:active {
      transform: translateY(2px);
    }

    @media #{$phablet} {
      top: 0.5rem;
      right: 0.5rem;
    }
  }

  .form__input-text {
    width: 100%;
  }

  .form__divider {
    margin: 10px;
    height: 1px;
    box-sizing: border-box;
  }
</style>
