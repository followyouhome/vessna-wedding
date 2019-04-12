<template>
  <popup class="popup-feedback-form">
    <template slot='body'>
      <form-feedback @success="close" @failure="close"/>
    </template>
  </popup>
</template>

<script>
  import Popup from './index.vue';
  import FormFeedback from '@/components/forms/form-feedback';

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
  .popup-feedback-form {
    padding: 30px 40px;
    background: $white;
  }
</style>

<story group="Popups" name="Feedback Form">
  <popup-feedback-form/>
</story>
