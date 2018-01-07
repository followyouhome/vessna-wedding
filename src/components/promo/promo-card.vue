<template>
	<div class="promo promo--card">
    <div class="promo__wrapper promo--card__wrapper">
			<router-link class="promo__image-wrapper promo--card__image-wrapper" v-bind:to="{ name: item.route, params: item.params }">
				<image-deferred v-bind:image="item.promo.image" v-if="item.promo.image"></image-deferred>
	      <video-regular v-bind:video="item.promo.video" v-if="item.promo.video"></video-regular>
			</router-link
      <div class="promo__content-wrapper promo--card__content-wrapper">
        <a class="promo--card__title" href="prom-and-party-dresses/vessna-2017">
        	<h4 class="promo__text-title">
        		<span class="font-peignot" v-html="item.promo.headline"></span>
        	</h4>
        </a>
        <div class="promo--card__copy">
          <p class="promo__text-copy" v-html="item.promo.subline"></p>
        </div>
        <div class="promo--card__copy">
          <div class="promo__text-copy" v-html="item.promo.text"></div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'promo-card',

		props: ['item']
	}
</script>

<style lang="scss">

</style>
