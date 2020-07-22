<template>
  <popup class="popup-image-carousel">
    <template slot='body'>
      <module-image-carousel :dress="dress"/>
    </template>
  </popup>
</template>

<script>
  import Popup from './popup.vue';
  import ModuleImageCarousel from '@/components/module/module-image-carousel/module-image-carousel.vue';

  export default {
    name: 'PopupImageCarousel',

    extends: Popup,

    components: {
      'popup': Popup,
      'module-image-carousel': ModuleImageCarousel,
    },

    props: ['payload'],

    data () {
      return {

      };
    },

    computed: {
      dress () {
        return this.payload && this.payload.dress;
      },
    },
  };
</script>

<style lang="scss">
  .popup-image-carousel.popup {
    width: 80%;
    height: auto;
    padding: 30px 40px;
    background: $gray1;

    @media #{$phablet} {
      height: auto;
      padding: 10px;
    }
  }
</style>
