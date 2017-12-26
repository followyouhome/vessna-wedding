<template>
	<div class="promo promo--collection">
	    <div class="promo__wrapper promo--collection__wrapper">
	        <a class="promo__image-wrapper promo--collection__image-wrapper" href="homepage/wedding-collections/2017-sensoria">
	            <image-deferred v-bind:image="promo.image"></image-deferred>
	        </a>
	        <div class="promo__content-wrapper promo--collection__content-wrapper">
	            <a class="promo--collection__title" href="homepage/wedding-collections/2017-sensoria">
	            	<h4 class="promo__text-title promo__text-title--normal-case">{{ promo.title }}</h4>
	            </a>
	            <a class="promo--collection__headline" href="homepage/wedding-collections/2017-sensoria">
	            	<h4 class="promo__text-headline promo__text-headline--normal-case">{{ promo.headline }}</h4>
	            </a>
	            <a class="promo--collection__link" href="homepage/wedding-collections/2017-sensoria">
	            	<h4 class="promo__text-headline">Подробнее</h4>
	            </a>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'promo-collection',

		props: ['promo']
	}
</script>

<style>

</style>
