<template>
  <popup class="popup-login">
    <template slot='body'>
      <form-user-login class="popup-login__form" @success="close" @failure="close"/>
    </template>
  </popup>
</template>

<script>
  import Popup from './popup.vue';
  import FormUserLogin from '@/components/forms/form-user-login';

  export default {
    name: 'popup-login',

    extends: Popup,

    components: {
      'popup': Popup,
      'form-user-login': FormUserLogin,
    },

    data () {
      return {

      };
    },
  };
</script>

<style lang="scss">
  .popup-login {
    position: relative;
    width: 400px;
    padding: 0;

    border: 1px solid $gray1;
    background: $white;
    box-shadow: 10px -10px 15px 10px $white;
  }

  .popup-login__form {
    margin: 20px auto;
    border: none;
  }
</style>

<story group="Popups" name="Login">
  <popup-login/>
</story>
