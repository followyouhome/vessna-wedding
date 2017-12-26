<template>
  <div class="promo promo--image promo--effect-fadein">
    <div class="promo__wrapper promo--image__wrapper">
      <a class="promo__image-wrapper promo--image__image-wrapper" href="/[[+uri]]">
        <image-deferred v-bind:image="promo.image"></image-deferred>
      </a>
      <div class="promo__content-wrapper promo--image__content-wrapper">
        <a class="promo--image__headline" href="/[[+uri]]"><h4 class="promo__text-headline">[[+tv.promo_headline]]</h4></a>
        <a class="promo--image__subheadline" href="/[[+uri]]">
          <p class="promo__text-subheadline">[[+tv.promo_subline]]</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'promo-image',

    props: ['promo']
  }
</script>

<style lang="scss">

</style>
