<template>
  <form class="form form-user-logout form--column" v-on:submit.prevent="submit">
    <div class="form__row">
      <legend class="popup-login__title">Выход из аккаунта</legend>
    </div>
    <div class="form__row">
      <input class="form__input-text" :value="form.email || user.email" type="email" placeholder="Email" disabled>
    </div>
    <div class="form__row">
      <input type="submit" value="Выйти"
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
    name: 'FormUserLogout',

    extends: Form,

    data () {
      return {
        action: 'logout',
        form: {
          email: '',
        },
      };
    },

    computed: {
      user () {
        return this.$store.state.user;
      },
    },
  };
</script>

<style lang="scss">
  .form-user-logout {
    margin: 1rem;
    padding: 1rem;
    width: 350px;
    border: 1px solid $gray3;
  }
</style>
