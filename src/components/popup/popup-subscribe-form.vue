<template>
  <v-popup class="popup-subscribe">
    <template slot='body'>
      <form-subscribe class="popup-subscribe__form" @success="close" @failure="close"/>
    </template>
  </v-popup>
</template>

<script>
  import Popup from './popup.vue';
  import FormSubscribe from '@/components/forms/form-subscribe';

  export default {
    name: 'PopupSubscribeForm',

    extends: Popup,

    components: {
      'v-popup': Popup,
      'form-subscribe': FormSubscribe,
    },

    data () {
      return {

      };
    },
  };
</script>

<style lang="scss">
  .popup-subscribe {
    position: relative;
    width: 400px;
    padding: 0;

    border: 1px solid $gray1;
    background: $white;
    box-shadow: 10px -10px 15px 10px $white;

    @media #{$phablet} {
      width: 90%;
    }
  }

  .popup-subscribe__form {
    padding: 20px;
    border: none;
  }
</style>

<story group="Popups" name="Subscribe">
  <popup-subscribe-form/>
</story>
