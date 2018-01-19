<template>
    <fieldset class="popup popup-signup">
        <legend class="popup-signup__title">Зарегистрироваться</legend>
        <form v-on:submit.prevent="signup">
            <label>Email address</label>
            <input v-model.trim="email" type="email">
            <label>Пароль</label>
            <input v-model="password" type="password">
            <input type="submit" class="button" value="Submit">
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
        password: '',
        // invite: ''
      };
    },

    methods: {
      signup() {
        console.log("SIGNUP FIRED");
        // debugger
        this.$store.dispatch('signup', this.$data)
          .then((data) => {
            this.$store.state.global.uid = data._id;
          });
      }
    }
  }
</script>

<style lang="scss">
  .popup-signup {
    width: 330px;
    padding: 16px;

    border: 1px solid $gray1;
    background: $white;
    box-shadow: 0px -10px 15px 0px $white;
  }

  .popup-signup__title {
    padding: 10px;
  }
</style>
