<template>
	<div class="promo promo--topical promo--effect-click promo--width-2">
	    <div class="promo__wrapper promo--topical__wrapper">
	        <a class="promo__image-wrapper promo--topical__image-wrapper" href="/news/2016.12-new-year">
	            <image-deferred v-bind:image="promo.image" v-bind:aspect="'image-deffered--size-1-2'"></image-deferred>
	        </a>
	        <div class="promo__content-wrapper promo--topical__content-wrapper">
	            <a class="promo--topical__headline" href="/news/2016.12-new-year">
	            	<h4 class="promo__text-headline">{{ promo.headline }}</h4>
	            </a>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'promo-topical',

		props: ['promo']
	}
</script>

<style>

</style>