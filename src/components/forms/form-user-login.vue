<template>
  <form class="form form-user-login form--column" v-on:submit.prevent="login">
    <div class="form__row">
      <legend class="popup-login__title">Вход</legend>
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model.trim="form.email" type="email" placeholder="Email">
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model="form.password" type="password" placeholder="Пароль">
    </div>
    <div class="form__row">
      <div class="popup__recaptcha g-recaptcha" :id="config.selector" data-callback="loginRecaptcha" :data-sitekey="config.sitekey"></div>
    </div>
    <div class="form__row">
      <input type="submit" class="form__button-submit" value="Войти" :title="disabled ? 'Заполните все поля' : 'Нажмите, чтобы войти'">
    </div>
  </form>
</template>

<script>
  import Form from './form.vue';

  export default {
    name: 'form-user-login',

    extends: Form,

    data() {
      return {
        config: {
          selector: '',
          sitekey: '',
        },
        form: {
          email: '',
          password: '',
        },
      };
    },

    computed: {
      disabled () {
        // return !this.form.email.length
          // || !this.form.password.length
          // || !this.status.recaptcha;
      },
    },

    methods: {
      login() {
        this.submit().then(() => {
          
        }).catch(() => {

        });
      },
    },
  };
</script>

<style lang="scss">
  .form-user-login {
    margin: 1rem;
    padding: 1rem;
    width: 350px;
    border: 1px solid $gray3;
  }
</style>
