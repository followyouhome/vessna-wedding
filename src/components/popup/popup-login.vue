<template>
  <fieldset class="popup popup-login">
      <legend class="popup-login__title">Вход</legend>
      <form v-on:submit.prevent="login">
        <input class="form__input-text" v-model.trim="email" type="email" placeholder="Email">
        <input class="form__input-text" v-model="password" type="password" placeholder="Пароль">
        <input type="submit" class="form__button-submit" value="Войти">
      </form>
      <div class="popup__close" @click="close" title="Закрыть окно">✖</div>
  </fieldset>
</template>

<script>
  import config from '../../../config';

  export default {
    name: 'login',

    data() {
      return {
        email: '',
        password: '',
      };
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
    width: 330px;
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

  .form__input-text {
    width: 100%;
  }

  .form__button-submit {
    width: 100%;
    margin-top: 10px;
  }
</style>
