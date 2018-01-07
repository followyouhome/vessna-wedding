<template>
	<div class="promo promo--collection">
	    <div class="promo__wrapper promo--collection__wrapper">
					<router-link class="promo__image-wrapper promo--collection__image-wrapper" v-bind:to="{ name: item.route, params: item.params }">
	            <image-deferred v-bind:image="item.promo.image"></image-deferred>
	        </router-link>
	        <div class="promo__content-wrapper promo--collection__content-wrapper">
							<router-link class="promo--collection__title" v-bind:to="{ name: item.route, params: item.params }">
	            	<h4 class="promo__text-title promo__text-title--normal-case">{{ item.promo.title }}</h4>
							</router-link>
							<router-link class="promo--collection__headline" v-bind:to="{ name: item.route, params: item.params }">
	            	<h4 class="promo__text-headline promo__text-headline--normal-case">{{ item.promo.headline }}</h4>
							</router-link>
							<router-link class="promo--collection__link" v-bind:to="{ name: item.route, params: item.params }">
	            	<h4 class="promo__text-headline">Подробнее</h4>
							</router-link>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'promo-collection',

		props: ['item']
	}
</script>

<style>

</style>
