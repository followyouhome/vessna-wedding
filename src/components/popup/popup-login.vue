<template>
  <fieldset class="popup popup-login">
    <!--<script src='https://www.google.com/recaptcha/api.js?hl=ru'></script>-->
    <legend class="popup-login__title">Вход</legend>
    <form v-on:submit.prevent="login">
      <input class="form__input-text" v-model.trim="email" type="email" placeholder="Email">
      <input class="form__input-text" v-model="password" type="password" placeholder="Пароль">
      <div class="popup__recaptcha g-recaptcha" :id="config.selector" data-callback="loginRecaptcha" :data-sitekey="config.sitekey"></div>
      <input type="submit" :class="['form__button-submit', this.status.request ? 'request' : '', this.status.success ? 'success' : '', this.status.fail ? 'fail' : '' ]" value="Войти" :disabled="disabled" :title="disabled ? 'Заполните все поля' : 'Нажмите, чтобы войти'">
    </form>
    <div class="popup__close" @click="close" title="Закрыть окно">✖</div>
  </fieldset>
</template>

<script>
  import config from '../../../config';

  let component;

  if (  __VUE_ENV__ === 'client') {
    window.loginRecaptcha = () => component.recaptcha = true;
  }

  export default {
    name: 'popup-login',

    data() {
      return {
        email: '',
        password: '',
        recaptcha: false,
        status: {
          request: false,
          success: false,
          fail: false,
        },
        config: {
          selector: 'popup-login__recaptcha',
          sitekey: '6Lf__kAUAAAAAAfyKZ7h_54WlKBUOrQTkvmAbhEC',
          url: 'https://www.google.com/recaptcha/api.js?hl=ru',
          id: 'recaptcha',
        },
      };
    },

    computed: {
      disabled () {
        return !this.email.length
          || !this.password.length
          || !this.recaptcha;
      },
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
          grecaptcha.render('popup-login__recaptcha', {
            'sitekey' : this.config.sitekey,
          });
        }
      }
    },

    methods: {
      close () {
        this.$store.commit('POPUP_UNSET');
      },
      login() {
        this.status.request = true;

        this.$store.dispatch('login', this)
          .then((data) => {
            this.status.request = false;

            if (data._id) {
              this.status.success = true;

              setTimeout(() => {
                this.status.success = true;
                this.$store.commit('POPUP_UNSET');
              }, 1000);
            } else {
              this.status.fail = true;

              setTimeout(() => {
                this.status.fail = false;
                this.$store.commit('POPUP_RESET');
              }, 1000);
            }
          });
      },
    },
  };
</script>

<style lang="scss">
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

  .popup-login {
    position: relative;
    width: 300px;
    padding: 0px 16px 16px;

    border: 1px solid $gray1;
    background: $white;
    box-shadow: 10px -10px 15px 10px $white;
  }

  .popup-login__title {
    padding: 10px;
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
    margin: 10px 0;
    width: 302px;
  }

  .form__input-text {
    width: 100%;
  }

  .form__button-submit {
    width: 100%;
    margin-top: 10px;
    transition: background linear 0.2s;

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
</style>
