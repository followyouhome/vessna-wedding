<template>
  <fieldset :class="['popup', 'popup-login', this.status.available ? 'popup--show' : 'popup--hide']">
    <legend class="popup-login__title">Вход</legend>
    <form v-on:submit.prevent="login">
      <input class="form__input-text" v-model.trim="form.email" type="email" placeholder="Email">
      <input class="form__input-text" v-model="form.password" type="password" placeholder="Пароль">
      <div class="popup__recaptcha g-recaptcha" :id="config.selector" data-callback="loginRecaptcha" :data-sitekey="config.sitekey"></div>
      <input type="submit" :class="['form__button-submit', this.status.request ? 'request' : '', this.status.success ? 'success' : '', this.status.fail ? 'fail' : '' ]" value="Войти" :disabled="disabled" :title="disabled ? 'Заполните все поля' : 'Нажмите, чтобы войти'">
    </form>
    <div class="popup__close" @click="close" title="Закрыть окно">✖</div>
  </fieldset>
</template>

<script>
  import config from '../../../config';
  import Popup from './popup.vue';

  export default {
    name: 'popup-login',

    extends: Popup,

    data () {
      return {
        form: {
          email: '',
          password: '',
        },
      };
    },

    computed: {
      disabled () {
        return !this.form.email.length
          || !this.form.password.length
          || !this.status.recaptcha;
      },
    },

    methods: {
      login () {
        this.status.request = true;

        this.$store.dispatch('login', this.form)
          .then((data) => {
            this.status.request = false;

            if (data._id) {
              this.status.success = true;

              setTimeout(() => { this.status.available = false; }, this.config.animation);
              setTimeout(() => { this.$store.commit('POPUP_UNSET'); }, this.config.animation * 2);
            } else {
              this.status.fail = true;

              setTimeout(() => { this.status.fail = false; this.$store.commit('POPUP_RESET'); }, this.config.animation * 3);
            }
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
</style>

<story group="Popups" name="Login">
  <popup-login/>
</story>
