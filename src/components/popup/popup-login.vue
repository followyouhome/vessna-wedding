<template>
  <fieldset class="popup popup-login">
      <legend class="popup-login__title">Вход</legend>
      <form v-on:submit.prevent="login">
          <label>Email</label>
          <input v-model.trim="email" type="email">
          <label>Пароль</label>
          <input v-model="password" type="password">
          <input type="submit" class="button" value="Войти">
      </form>
  </fieldset>
</template>

<script>
  import config from '../../../config';

  export default {
    name: 'login',

    data() {
      return {
        email: '',
        password: ''
      }
    },

    methods: {
      login() {
        this.$store.dispatch('login', this)
          .then((data) => {
            this.$router.push({ name: 'profile' });
            this.$store.state.global.uid = data._id;
          });
      }
    }
  }
</script>

<style lang="scss">
  .popup-login {
    width: 330px;
    padding: 16px;

    border: 1px solid $gray1;
    background: $white;
    box-shadow: 0px -10px 15px 0px $white;
  }

  .popup-login__title {
    padding: 10px;
  }
</style>
