<template>
  <popup class="popup-feedback-form">
    <template slot='body'>
      <form-user-registration/>
    </template>
  </popup>
</template>

<script>
  import Popup from './index.vue';
  import FormUserRegistration from '@/components/forms/form-user-registration';

  export default {
    name: 'popup-signup',

    extends: Popup,

    components: {
      'popup': Popup,
      'form-user-registration': FormUserRegistration,
    },

    data () {

    },

    methods: {
      signup () {
        // this.status.request = true;
        //
        // this.$store.dispatch('signup', this.form)
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
  .popup-signup {
    position: relative;
    width: 300px;
    padding: 0px 16px 16px;

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
