<template>

</template>

<script>

  export default {
    name: 'popup',

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
      window.removeEventListener('keydown', this.keyboardListener);
    },

    methods: {
      close () {
        this.status.available = false;

        setTimeout(() => { this.$store.commit('POPUP_UNSET'); }, this.config.animation);
      },

      keyboardListener (event) {
        console.log("ASD");
        if (event.keyCode === 27) {
          setTimeout(() => { this.$store.commit('POPUP_UNSET'); }, this.config.animation);
        }
      },
    },
  };
</script>

<style lang="scss">
  @include animation-fade-in();

  .popup {
    margin: auto;
    animation: animation-fade-in 0.3s normal;
    box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.75);
  }

  .popup__close {
    position: absolute;
    padding: 0 5px;
    right: 5px;
    top: 10px;
    cursor: pointer;
    background: $white;
  }

  .popup__recaptcha {
    position: relative;
    margin: 10px 0;
    width: 302px;
    overflow: hidden;
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
