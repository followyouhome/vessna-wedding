<template>
  <form class="form form-user-login form--column" v-on:submit.prevent="submit">
    <div class="form__row">
      <legend class="popup-login__title">Регистрация</legend>
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model.trim="form.email" type="email" placeholder="Email">
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model="form.password" type="password" placeholder="Пароль">
    </div>
    <hr class="form__divider"/>
    <div class="form__row">
      <input class="form__input-text" v-model="form.city" type="text" placeholder="Город">
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model="form.shop" type="text" placeholder="Магазин">
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model="form.phone" type="phone" placeholder="Телефон">
    </div>
    <hr class="form__divider"/>
    <div class="form__row">
      <input class="form__input-text" v-model="form.phone" type="checkbox" placeholder="Телефон">
      <label>Подписаться на рассылку</label>
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model="form.phone" type="checkbox" placeholder="Телефон">
      <label>Согласие с пользовательским соглашением</label>
    </div>
    <hr class="form__divider"/>
    <div class="form__row">
      <captcha-google v-on:success="captcha"/>
    </div>
    <div class="form__row">
      <input type="submit" value="Зарегистрироваться"
        :disabled="!recaptcha"
        :title="!recaptcha ? 'Заполните все поля' : 'Нажмите, чтобы зарегистрироваться'"
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
    name: 'FormUserRegistration',

    extends: Form,

    data () {
      return {
        recaptcha: true,
        action: 'registration',
        confirmPassord: '',
        form: {
          name: '',
          email: '',
          password: '',
          shop: '',
          city: '',
          phone: '',
        },
      };
    },

    computed: {

    },

    methods: {
      captcha () {
        this.recaptcha = true;
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
