<template>
  <div class="global-popup-container" @click="clickOutside($event)" v-show="popup" v-if="!amp">
    <component :is="popup" :payload="payload"/>
  </div>
  <div v-else>
    <amp-lightbox :id="item" layout="nodisplay" scrollable :key="item" v-for="item in items" class="global-popup-container">
      <component :is="item" :id="item" :payload="payload"/>
    </amp-lightbox>
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

    data () {
      return {
        /**
         * Get popup ids from child components
         */
        items: Object.keys(this.$options.components).filter(key => key.includes('popup')),
      };
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

      amp () {
        return this.$store.getters.amp;
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
    box-sizing: border-box;
    z-index: $z-popup;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
  }
</style>
