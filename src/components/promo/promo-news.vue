<template>
	<div class="promo promo-news promo--width-2">
		<div class="promo__wrapper promo-news__wrapper">
		  <router-link class="promo__image-wrapper promo-news__image-wrapper" v-if="item.promo.image" v-bind:to="item.route">
				<image-deferred v-bind:image="item.promo.image"></image-deferred>
			</router-link>
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
	import Promo from './promo';

	export default {
		name: 'promo-news',

		extends: Promo,

		props: ['item'],
	};
</script>

<style lang="scss">
	.promo-news {
		width: 300px;

		&:hover {
			.promo-news__wrapper {
				box-shadow: none;
			}
		}
	}

	.promo-news__wrapper {
		box-shadow: 0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.06);
	}

	.promo-news__content-wrapper {
		padding: 25px 40px;

		@media #{$phablet} {
			padding: 10px 20px;
		}

		> *:last-child {

		}
	}

	.promo-news__headline {
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

	.promo-news__line {
		margin: 30px 0px 15px;

		@media #{$phablet} {
			margin: 20px 0 10px;
		}
	}

	.promo-news__footnote {
		text-decoration: none;

		&:hover {
			text-decoration: none;
		}
	}
</style>

<story group="Promos" name="News">
	<promo-news
		:item="{
		  name: 'Съемка свадебной коллекции 2018',
		  promo: {
		    media: 'image',
		    image: {
		      secure_url: '/images/vessna-wedding-2018.jpg',
		      url: '/images/vessna-wedding-2018.jpg',
		      height: 1280,
		      width: 1920,
		    },
		    text: '',
		    subline: '',
		    headline: 'Съемка новой свадебной коллекции 2018 года',
		    alt: ''
		  },
		  state: 'published',
		  publishedDate: '2017-11-12T00:00:00.000Z',
		  route: {
		    params: {
		      to: '#'
		    }
		  }
		}"
	/>
</story>
