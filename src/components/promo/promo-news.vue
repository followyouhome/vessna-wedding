<template>
	<div class="promo promo--news promo--width-2">
		<div class="promo__wrapper promo--news__wrapper">
		  <router-link class="promo__image-wrapper promo--news__image-wrapper" v-if="promo.image" v-bind:to="{ name: 'page-news', params: { news: promo.slug }}">
				<image-deferred v-bind:image="promo.image"></image-deferred>
			</router-link>
			<div class="promo__content-wrapper promo--news__content-wrapper">
				<p class="promo--news__date"><span class="promo__text-date">{{ promo.date }}</span></p>
				<router-link class="ppromo--news__headline" v-bind:to="{ name: 'page-news', params: { news: promo.slug }}">
					<h4 class="promo__text-headline">{{ promo.headline }}</h4>
				</router-link>
				<hr class="promo__line promo--news__line">
				<router-link class="promo--news__promo_footnote" v-bind:to="{ name: 'page-news', params: { news: promo.slug }}">
					<span class="promo__text-footnote">{{ promo.footnote }}</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'promo-news',

		props: ['promo']
	}
</script>

<style lang="scss">

</style>
