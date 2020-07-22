<template>
  <popup class="popup-signup">
    <template slot='body'>
      <form-user-registration class="popup-signup__form" @success="close" @failure="close"/>
    </template>
  </popup>
</template>

<script>
  import Popup from './popup.vue';
  import FormUserRegistration from '@/components/forms/form-user-registration/form-user-registration.vue';

  export default {
    name: 'popup-signup',

    extends: Popup,

    components: {
      'popup': Popup,
      'form-user-registration': FormUserRegistration,
    },

    data () {
      return {

      };
    },
  };
</script>

<style lang="scss">
  .popup-signup.popup {
    position: relative;
    width: 400px;
    padding: 0;

    border: 1px solid $gray1;
    background: $white;
    box-shadow: 10px -10px 15px 10px $white;
  }

  .popup-signup__form {
    margin: 20px auto;
    border: none;
  }
</style>
