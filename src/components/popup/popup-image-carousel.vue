<template>
  <popup class="popup-image-carousel">
    <template slot='body'>
      <module-image-carousel :images="payload.images"/>
    </template>
  </popup>
</template>

<script>
  import Popup from './popup.vue';
  import ModuleImageCarousel from '@/components/module/module-image-carousel';

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
  };
</script>

<style lang="scss">
  .popup-image-carousel {
    height: 80%;
    padding: 30px 40px;
    background: $gray1;
    overflow: hidden;
  }
</style>

<story group="Popups" name="Image Carousel">
  <popup-image-carousel
    :images="[{
      width: 1120,
      height: 1680,
      secure_url: 'https://vessna.wedding/images/ABSFPUXIIIQ50TPXCGRU.JPG',
      url: 'https://vessna.wedding/images/ABSFPUXIIIQ50TPXCGRU.JPG',
    }, {
      width: 1120,
      height: 1680,
      secure_url: 'https://vessna.wedding/images/AO3JKEL5CGJ7K22XBY1V.JPG',
      url: 'https://vessna.wedding/images/AO3JKEL5CGJ7K22XBY1V.JPG',
    }, {
      width: 1120,
      height: 1680,
      secure_url: 'https://vessna.wedding/images/EF08HSAQTU0V0DCZPVES.JPG',
      url: 'https://vessna.wedding/images/EF08HSAQTU0V0DCZPVES.JPG',
    }]"
  />
</story>
