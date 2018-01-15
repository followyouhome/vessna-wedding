<template>
  <header class="main-promo [[+dir]] [[+pos]]" v-if="promo.media != 'null'">
    <div class="main-promo__hgroup">
      <div class="main-promo__hgroup__content">
        <h2>{{promo.subline}}</h2>
        <h1>{{promo.headline}}</h1>
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
    },
  };
</script>

<style lang="scss">

</style>
