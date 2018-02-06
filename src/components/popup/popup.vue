<template>

</template>

<script>
  let component;

  if (  __VUE_ENV__ === 'client') {
    window.loginRecaptcha = () => component.status.recaptcha = true;
  }

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
          selector: 'popup__recaptcha',
          sitekey: '6Lf__kAUAAAAAAfyKZ7h_54WlKBUOrQTkvmAbhEC',
          url: 'https://www.google.com/recaptcha/api.js?hl=ru',
          id: 'recaptcha',
        },
      };
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        component = this;

        if (!document.getElementById('recaptcha')) {
          const script = document.createElement("script");

          script.src = this.config.url;
          script.id = this.config.id;

          document.head.appendChild(script);
        } else {
          grecaptcha.render('popup__recaptcha', {
            'sitekey' : this.config.sitekey,
          });
        }
      }
    },

    methods: {
      close () {
        this.status.available = false;

        setTimeout(() => { this.$store.commit('POPUP_UNSET'); }, this.config.animation);
      },
    },
  };
</script>

<style lang="scss">
  @keyframes fade-in {
    from {
      transform: translateY(-3rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fade-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-3rem);
      opacity: 0;
    }
  }

  @-webkit-keyframes fail {
    0%   { transform: translateX(0);}
    12%   { transform: translateX(-3px);}
    25%   { transform: translateX(0);}
    37%   { transform: translateX(3px);}
    50%   { transform: translateX(0);}
    62%   { transform: translateX(-3px);}
    75%   { transform: translateX(0);}
    87%   { transform: translateX(3px);}
    100% { transform: translateX(0); }
  }

  @-webkit-keyframes request {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  .popup--show {
    animation: fade-in 0.3s normal;
    opacity: 1;
  }

  .popup--hide {
    animation: fade-out 0.3s normal;
    opacity: 0;
  }

  .popup__close {
    position: absolute;
    padding: 0 5px;
    right: 5px;
    top: 10px;
    cursor: pointer;
    background: $white;
  }

  .form__button-submit {
    width: 100%;
    margin-top: 10px;
    transition: background linear 0.2s, transform linear 0.1s;

    &:active {
      transform: translateY(2px);
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      cursor: default;
      cursor: not-allowed;
      opacity: 0.5;

      &:hover {
        background: inherit;
        color: inherit;
      }
    }

    &.request {
      animation: request 1s infinite;
    }

    &.success {
      background: $green;
      color: $white;

      &:hover {
        opacity: 0.9;
        background: $green;
        color: $white;
      }
    }

    &.fail {
      animation: fail 0.3s 1;
      background: $red;
      color: $white;

      &:hover {
        opacity: 0.9;
        background: $red;
        color: $white;
      }
    }
  }

  .popup__recaptcha {
    margin: 10px 0;
    width: 302px;
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
