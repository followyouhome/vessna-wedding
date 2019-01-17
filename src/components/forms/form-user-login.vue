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
      <captcha-google v-on:success="captcha"/>
    </div>
    <div class="form__row">
      <input type="submit" value="Войти"
        :disabled="!recaptcha"
        :title="!recaptcha ? 'Заполните все поля' : 'Нажмите, чтобы войти'"
        :class="[
          'form__button-submit',
          request ? 'request' : '',
          success ? 'success' : '',
          fail ? 'fail' : '',
        ]"
      />
    </div>
  </form>
</template>

<script>
  import Form from './form.vue';

  export default {
    name: 'form-user-login',

    extends: Form,

    data () {
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
      captcha () {
        this.recaptcha = true;
      },
      login () {
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
