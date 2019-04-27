<template>
  <v-popup class="popup-cooperation-form">
    <template slot='body'>
      <form-cooperation @success="close" @failure="close"/>
    </template>
  </v-popup>
</template>

<script>
  import Popup from './popup.vue';
  import FormCooperation from '@/components/forms/form-cooperation';

  export default {
    name: 'PopupCooperationForm',

    extends: Popup,

    components: {
      'v-popup': Popup,
      'form-cooperation': FormCooperation,
    },

    data () {
      return {

      };
    },
  };
</script>

<style lang="scss">
  .popup-cooperation-form.popup {
    padding: 30px 40px;
    background: $white;
  }
</style>

<story group="Popups" name="Cooperation Form">
  <popup-cooperation-form/>
</story>
