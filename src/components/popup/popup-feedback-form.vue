<template>
  <popup class="popup-feedback-form">
    <template slot='body'>
      <form-feedback @success="close"/>
    </template>
  </popup>
</template>

<script>
  import Popup from './popup.vue';
  import FormFeedback from '@/components/forms/form-feedback/form-feedback.vue';

  export default {
    name: 'PopupFeedbackForm',

    extends: Popup,

    components: {
      'popup': Popup,
      'form-feedback': FormFeedback,
    },

    data () {
      return {

      };
    },
  };
</script>

<style lang="scss">
  .popup-feedback-form.popup {
    padding: 30px 40px;
    background: $white;

    @media #{$phablet} {
      padding: 15px 10px;
    }
  }
</style>
