<template>
	<div class="promo promo--collection">
	    <div class="promo__wrapper promo--collection__wrapper">
					<router-link class="promo__image-wrapper promo--collection__image-wrapper" v-bind:to="item.route">
	            <image-deferred v-bind:image="item.promo.image"></image-deferred>
	        </router-link>
	        <div class="promo__content-wrapper promo--collection__content-wrapper">
							<router-link class="promo--collection__title" v-bind:to="item.route">
	            	<h4 class="promo__text-title promo__text-title--normal-case" v-html="item.promo.title"></h4>
							</router-link>
							<router-link class="promo--collection__headline" v-bind:to="item.route">
	            	<h4 class="promo__text-headline promo__text-headline--normal-case" v-html="item.promo.headline"></h4>
							</router-link>
							<router-link class="promo--collection__link" v-bind:to="item.route">
	            	<h4 class="promo__text-headline">Подробнее</h4>
							</router-link>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'promo-collection',

		props: ['item'],
	};
</script>

<style lang="scss">
	.promo--collection {
		width: 500px;
	}

	.promo--collection__wrapper {
		padding: 0;
	}

	.promo--collection__content-wrapper {
		padding: 15px;

		text-align: center;
	}

	.promo--collection__title {
		display: block;
		margin: 0 20px;
	}

	.promo--collection__headline {
		display: block;
		margin: 5px 20px;
	}

	.promo--collection__link {
		display: inline-block;
		padding: 7px 29px;
		margin: 31px 0 0;

		background: $white;
		border: 1px solid $yellow2;

		&:hover {
			background: $gray2;
		}
	}
</style>
