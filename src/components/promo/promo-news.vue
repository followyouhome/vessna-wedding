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

		props: ['promo'],
	};
</script>

<style lang="scss">
	.promo--news {
		width: 300px;

		&:hover {
			.promo--news__wrapper {
				box-shadow: none;
			}
		}
	}

	.promo--news__wrapper {
		box-shadow: 0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.06);
	}

	.promo--news__content-wrapper {
		padding: 25px 40px;

		@media #{$phablet} {
			padding: 10px 20px;
		}

		> *:last-child {

		}
	}

	.promo--news__headline {
		display: block;

		text-decoration: none;

		&:hover, &:focus {
			outline: none;
			color: $black;
			text-decoration: none;
		}

		&:active {
			text-decoration: none;

			transform: translateY(2px);
		}
	}

	.promo--news__line {
		margin: 30px 0px 15px;

		@media #{$phablet} {
			margin: 20px 0 10px;
		}
	}

	.promo--news__promo_footnote {
		text-decoration: none;

		&:hover {
			text-decoration: none;
		}
	}
</style>
