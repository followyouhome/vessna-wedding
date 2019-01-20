<template>
  <form class="form form-user-login form--column" v-on:submit.prevent="submit">
    <div class="form__row">
      <legend class="popup-login__title">Регистрация</legend>
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model.trim="form.name" type="text" placeholder="Имя" required>
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model.trim="form.email" type="email" placeholder="Email" required>
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model="form.password" type="password" placeholder="Пароль" required>
    </div>
    <hr class="form__divider"/>
    <div class="form__row">
      <input class="form__input-text" v-model="form.info.city" type="text" placeholder="Город" required>
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model="form.info.shop" type="text" placeholder="Магазин" required>
    </div>
    <div class="form__row">
      <input class="form__input-text" v-model="form.info.phone" type="phone" placeholder="Телефон" required>
    </div>
    <hr class="form__divider"/>
    <div class="form__row">
      <input class="form__input-text" v-model="form.promocode" type="phone" placeholder="Промокод">
    </div>
    <div class="form__row">
      <input class="form__input-checkbox" v-model="form.access.subscription" type="checkbox">
      <label class="form__input-label">Подписаться на рассылку</label>
    </div>
    <div class="form__row">
      <input class="form__input-checkbox" v-model="form.agreement" type="checkbox" required>
      <label class="form__input-label">Согласие с пользовательским соглашением</label>
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
          info: {
            shop: '',
            city: '',
            phone: '',
          },
          access: {
            subscription: '',
          },
        },
      };
    },

    computed: {

    },

    methods: {

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
