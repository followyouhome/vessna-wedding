<template>
  <div class="global-popup-container" @click="clickOutside($event)">
    <popup-login v-if="popup === 'popup-login'" :payload="payload"/>
    <popup-signup v-if="popup === 'popup-signup'" :payload="payload"/>
    <popup-coupon v-if="popup === 'popup-coupon'" :payload="payload"/>
    <popup-feedback-form v-if="popup === 'popup-feedback-form'" :payload="payload"/>
    <popup-image-carousel v-if="popup === 'popup-image-carousel'" :payload="payload"/>
    <popup-cooperation-form v-if="popup === 'popup-cooperation-form'" :payload="payload"/>
  </div>
</template>

<script>
  import PopupLogin from '@/components/popup/popup-login.vue';
  import PopupSignup from '@/components/popup/popup-signup.vue';
  import PopupCoupon from '@/components/popup/popup-coupon.vue';
  import PopupFeedbackForm from '@/components/popup/popup-feedback-form';
  import PopupImageCarousel from '@/components/popup/popup-image-carousel';
  import PopupCooperationForm from '@/components/popup/popup-cooperation-form';

  export default {
    name: 'GlobalPopupContainer',

    components: {
      'popup-login': PopupLogin,
      'popup-signup': PopupSignup,
      'popup-coupon': PopupCoupon,
      'popup-feedback-form': PopupFeedbackForm,
      'popup-image-carousel': PopupImageCarousel,
      'popup-cooperation-form': PopupCooperationForm,
    },

    computed: {
      popup () {
        const popup = this.$store.state.popup && this.$store.state.popup.item;

        if (popup) {
          this.$store.commit('TRACK_FORM_OPEN');

          return popup;
        }

        return null;
      },

      payload () {
        console.log(this.$store.state.popup && this.$store.state.popup.payload);
        return this.$store.state.popup && this.$store.state.popup.payload;
      },
    },

    methods: {
      clickOutside (e) {
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
