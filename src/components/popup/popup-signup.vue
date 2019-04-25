<template>
  <popup class="popup-signup">
    <template slot='body'>
      <form-user-registration @success="close" @failure="close"/>
    </template>
  </popup>
</template>

<script>
  import Popup from './popup.vue';
  import FormUserRegistration from '@/components/forms/form-user-registration';

  export default {
    name: 'popup-signup',

    extends: Popup,

    components: {
      'popup': Popup,
      'form-user-registration': FormUserRegistration,
    },

    data () {
      return {

      }
    },
  };
</script>

<style lang="scss">
  .popup-signup {
    position: relative;
    padding: 0;

    border: 1px solid $gray1;
    background: $white;
    box-shadow: 10px -10px 15px 10px $white;
  }

  .popup-signup__title {
    padding: 10px;
  }
</style>

<story group="Popups" name="Signup">
  <popup-signup/>
</story>
