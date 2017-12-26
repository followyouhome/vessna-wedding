<template>
	<div class="promo promo--card">
    <div class="promo__wrapper promo--card__wrapper">
      <a class="promo__image-wrapper promo--card__image-wrapper" href="prom-and-party-dresses/vessna-2017">
        <image-deferred v-bind:image="promo.image"></image-deferred>
      </a>
      <div class="promo__content-wrapper promo--card__content-wrapper">
        <a class="promo--card__title" href="prom-and-party-dresses/vessna-2017">
        	<h4 class="promo__text-title">
        		<span class="font-peignot">{{ promo.headline }}</span>
        	</h4>
        </a>
        <div class="promo--card__copy">
          <p class="promo__text-copy">{{ promo.subline }}</p>
        </div>
        <div class="promo--card__copy">
          <div class="promo__text-copy">{{ promo.text }}</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'promo-card',

		props: ['promo']
	}
</script>

<style lang="scss">

</style>
