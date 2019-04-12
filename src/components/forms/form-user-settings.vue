<template>
  <form class="form form-user-settings form--column" v-on:submit.prevent="submit">
    <div class="form__row">
      <legend class="popup-login__title">Настройки</legend>
    </div>
    <div class="form__row">
      <select class="form__input-selection" v-model.trim="form.access.currency" type="text" placeholder="Валюта" required>
        <option value="rub">RUB</option>
        <option value="usd" disabled>USD</option>
      </select>
    </div>
    <div class="form__row">
      <captcha-google v-on:success="captcha"/>
    </div>
    <div class="form__row">
      <input type="submit" value="Сохранить"
        :disabled="!recaptcha"
        :title="'Нажмите, чтобы зарегистрироваться'"
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
  import Form from './index.vue';

  export default {
    name: 'FormUserSettings',

    extends: Form,

    data () {
      return {
        recaptcha: true,
        action: 'settings',
        form: {
          access: {
            currency: this.$store.state.user.access.currency,
          },
        },
      };
    },

    computed: {
      currency () {
        return this.$store.state.user && this.$store.state.user.access && this.$store.state.user.access.currency;
      },
    },
  };
</script>

<style lang="scss">
  .form-user-settings {
    margin: 1rem;
    padding: 1rem;
    width: 350px;
    border: 1px solid $gray3;
  }
</style>

<story group="Forms" name="User Settings">
  <form-user-settings/>
</story>
