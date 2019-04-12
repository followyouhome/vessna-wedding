<template>
  <popup class="popup-login">
    <template slot='body'>
      <form-user-login/>
    </template>
  </popup>
</template>

<script>
  import Popup from './index.vue';
  import FormUserLogin from '@/components/forms/form-user-login';

  export default {
    name: 'popup-login',

    extends: Popup,

    components: {
      'popup': Popup,
      'form-user-login': FormUserLogin,
    },

    data () {

    },

    methods: {
      login () {
        // this.status.request = true;
        //
        // this.$store.dispatch('login', this.form)
        //   .then((data) => {
        //     this.status.request = false;
        //
        //     if (data._id) {
        //       this.status.success = true;
        //
        //       setTimeout(() => { this.status.available = false; }, this.config.animation);
        //       setTimeout(() => { this.$store.commit('POPUP_UNSET'); }, this.config.animation * 2);
        //     } else {
        //       this.status.fail = true;
        //
        //       setTimeout(() => { this.status.fail = false; this.$store.commit('POPUP_RESET'); }, this.config.animation * 3);
        //     }
        //   });
      },
    },
  };
</script>

<style lang="scss">
  .popup-login {
    position: relative;
    width: 400px;
    padding: 0px 16px 16px;

    border: 1px solid $gray1;
    background: $white;
    box-shadow: 10px -10px 15px 10px $white;
  }

  .popup-login__title {
    padding: 10px;
  }
</style>

<story group="Popups" name="Login">
  <popup-login/>
</story>
