<template>
  <div class="promo promo--dress promo--width-2">
    <div class="promo__wrapper promo--dress__wrapper">
      <router-link class="promo__image-wrapper promo--dress__image-wrapper promo--dress__image-wrapper--no-link" v-if="promo.image" v-bind:to="{ name: 'page-dress', params: { collection: 'vessna-2017', dress: promo.slug }}">
        <image-deferred v-bind:image="promo.image"></image-deferred>
      </router-link>
      <div class="promo__content-wrapper promo--dress__content-wrapper">
        <div class="promo--dress__headline promo--dress__headline--no-link">
           <h4 class="promo__text-headline">{{promo.headline}}</h4>
        </div>
        <div class="promo--dress__subheadline">
           <p class="promo__text-subheadline">{{promo.subline}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'promo-dress',

    props: ['promo']
  }
</script>

<style lang="scss">

</style>
