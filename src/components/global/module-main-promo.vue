<template>
  <header v-bind:class="['main-promo', align]" v-if="promo.media != 'null'">
    <div class="main-promo__hgroup">
      <div class="main-promo__hgroup__content">
        <h2 v-html="promo.subline"></h2>
        <h1 v-html="promo.headline">}</h1>
        <svg class="ellipse ellipse--blur">
          <ellipse cx="50%" cy="50%" rx="50%" ry="50%"></ellipse>
        </svg>
      </div>
    </div>
    <div class="main-promo__wrapper">
      <image-deferred v-bind:image="promo.image" v-if="promo.media == 'image'"></image-deferred>
      <video-regular v-bind:video="promo.video" v-if="promo.media == 'video'"></video-regular>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'module-main-promo',

    computed: {
      promo () {
        return this.$store.state.main_promo;
      },
      align () {
        const align = this.$store.state.main_promo.align;
        let result = '';

        if (align) {
          if (align.indexOf("top") != -1) {
            result += ' main-promo--hgroup-top';
          }

          if (align.indexOf("middle") != -1) {
            result += ' main-promo--hgroup-middle';
          }

          if (align.indexOf("bottom") != -1) {
            result += ' main-promo--hgroup-bottom';
          }

          if (align.indexOf("left") != -1) {
            result += ' main-promo--hgroup-left';
          }

          if (align.indexOf("center") != -1) {
            result += ' main-promo--hgroup-center';
          }

          if (align.indexOf("right") != -1) {
            result += ' main-promo--hgroup-right';
          }
        }

        return result;
      },
    },
  };
</script>

<style lang="scss">

</style>
