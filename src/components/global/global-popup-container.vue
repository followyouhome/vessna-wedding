<template>
  <div class="global-popup-container" @click="clickOutside($event)">
    <popup-login v-if="popup === 'popup-login'" :payload="payload"/>
    <popup-signup v-if="popup === 'popup-signup'" :payload="payload"/>
    <popup-coupon v-if="popup === 'popup-coupon'" :payload="payload"/>
    <popup-feedback-form v-if="popup === 'popup-feedback-form'" :payload="payload"/>
    <popup-subscribe-form v-if="popup === 'popup-subscribe-form'" :payload="payload"/>
    <popup-image-carousel v-if="popup === 'popup-image-carousel'" :payload="payload"/>
    <popup-cooperation-form v-if="popup === 'popup-cooperation-form'" :payload="payload"/>
  </div>
</template>

<script>
  const PopupLogin = () => import(/* webpackChunkName: "popup-login" */ '@/components/popup/popup-login.vue');
  const PopupSignup = () => import(/* webpackChunkName: "popup-signup" */ '@/components/popup/popup-signup.vue');
  const PopupCoupon = () => import(/* webpackChunkName: "popup-coupon" */ '@/components/popup/popup-coupon.vue');
  const PopupFeedbackForm = () => import(/* webpackChunkName: "popup-feedback-form" */ '@/components/popup/popup-feedback-form');
  const PopupSubscribeForm = () => import(/* webpackChunkName: "popup-subscribe-form" */ '@/components/popup/popup-subscribe-form');
  const PopupImageCarousel = () => import(/* webpackChunkName: "popup-image-carousel" */ '@/components/popup/popup-image-carousel');
  const PopupCooperationForm  = () => import(/* webpackChunkName: "popup-cooperation-form" */ '@/components/popup/popup-cooperation-form');

  export default {
    name: 'GlobalPopupContainer',

    components: {
      'popup-login': PopupLogin,
      'popup-signup': PopupSignup,
      'popup-coupon': PopupCoupon,
      'popup-feedback-form': PopupFeedbackForm,
      'popup-subscribe-form': PopupSubscribeForm,
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
    flex-direction: column;
    justify-content: flex-start;
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
