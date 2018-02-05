<template>
  <fieldset class="popup popup-login">
    <!--<script src='https://www.google.com/recaptcha/api.js?hl=ru'></script>-->
    <legend class="popup-login__title">Вход</legend>
    <form v-on:submit.prevent="login">
      <input class="form__input-text" v-model.trim="email" type="email" placeholder="Email">
      <input class="form__input-text" v-model="password" type="password" placeholder="Пароль">
      <div class="popup__recaptcha g-recaptcha" :id="config.selector" data-callback="loginRecaptcha" :data-sitekey="config.sitekey"></div>
      <input type="submit" class="form__button-submit" value="Войти" :disabled="disabled" :title="disabled ? 'Заполните все поля' : 'Нажмите, чтобы войти'">
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
    name: 'login',

    data() {
      return {
        email: '',
        password: '',
        recaptcha: false,
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
        this.$store.dispatch('login', this)
          .then((data) => {
            this.$store.commit('POPUP_UNSET');
          });
      },
    },
  };
</script>

<style lang="scss">
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

    &:disabled {
      cursor: default;
      cursor: not-allowed;
      opacity: 0.5;

      &:hover {
        background: inherit;
        color: inherit;
      }
    }
  }
</style>
