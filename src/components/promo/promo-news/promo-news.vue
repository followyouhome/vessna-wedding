<template>
	<div class="promo promo-news promo--width-2">
		<div class="promo__wrapper promo-news__wrapper">
		  <atom-link class="promo__image-wrapper promo-news__image-wrapper" v-if="item.promo.image" v-bind:to="item.route">
				<image-deferred v-bind:image="item.promo.image"></image-deferred>
			</atom-link>
			<div class="promo__content-wrapper promo-news__content-wrapper">
				<p class="promo-news__date"><span class="promo__text-date">{{ item.publishedDate.slice(0, 10) }}</span></p>
				<router-link class="ppromo-news__headline" v-bind:to="item.route">
					<h4 class="promo__text-headline">{{ item.promo.headline }}</h4>
				</router-link>
				<hr class="promo-news__line">
				<router-link class="promo-news__footnote" v-bind:to="item.route">
					<span class="promo__text-footnote">{{ item.promo.footnote || 'Читать далее' }}</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import Promo from '@/components/promo/promo';

	export default {
		name: 'promo-news',

		extends: Promo,

		props: ['item'],
	};
</script>

<style lang="scss">
	.promo-news__wrapper {
		html[amp] & {
			height: 100%;
		}
	}

	.promo-news__content-wrapper {
		padding: 10px;
	}
</style>
