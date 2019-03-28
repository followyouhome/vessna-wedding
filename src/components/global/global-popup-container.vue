<template>
  <div class="global-popup-container" @click="check($event)">
    <popup-login v-if="popup === 'login'"/>
    <popup-signup v-if="popup === 'signup'"/>
    <popup-cooperation-form v-if="popup === 'popup-cooperation-form'"/>
  </div>
</template>

<script>
  import PopupLogin from '@/components/popup/popup-login.vue';
  import PopupSignup from '@/components/popup/popup-signup.vue';
  import PopupContactForm from '@/components/popup/popup-contact-form';
  import PopupCooperationForm from '@/components/popup/popup-cooperation-form';

  export default {
    name: 'global-popup-container',

    components: {
      'popup-login': PopupLogin,
      'popup-signup': PopupSignup,
      'popup-contact-form': PopupContactForm,
      'popup-cooperation-form': PopupCooperationForm,
    },

    computed: {
      popup () {
        return this.$store.state.popup && this.$store.state.popup.item;
      },
    },

    methods: {
      check (e) {
        if (e.path[0] === this.$el) {
          this.$store.commit('POPUP_UNSET');
        }
      },
    },
  };

</script>

<style lang="scss">
  .global-popup-container {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    position: fixed;
    padding: 20px;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: $z-popup;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
  }
</style>
