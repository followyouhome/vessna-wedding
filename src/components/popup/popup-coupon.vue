<template>
  <v-popup class="popup-coupon">
    <template slot='body'>
      <promo-coupon class="popup-coupon__promo"/>
    </template>
  </v-popup>
</template>

<script>
  import Popup from './popup.vue';
  import { PromoCoupon } from '@/components/promo';

  export default {
    name: 'PopupCooperationForm',

    extends: Popup,

    components: {
      'v-popup': Popup,
      'promo-coupon': PromoCoupon,
    },

    data () {
      return {

      };
    },
  };
</script>

<style lang="scss">
  .popup-coupon.popup {
    width: 600px;
    height: 400px;
    padding: 0;
  }

  .popup-coupon__promo {
    border: none;
  }
</style>
