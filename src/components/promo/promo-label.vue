<template>
  <div class="promo promo--label [[+promo_size]]">
    <div class="promo__wrapper promo--label__wrapper">
      <div class="promo__content-wrapper promo--label__content-wrapper">
        <div class="promo--label__headline">
          <h4 class="promo__text-subheadline">[[+content]]</h4>
        </div>
        <div class="promo--label__copy">
          <p class="promo__text-copy"></p>
        </div>
      </div>
    </div>
</div>

</template>

<script>
  export default {
    name: 'promo-label',

    props: ['promo']
  }
</script>

<style lang="scss">

</style>
