<template>
	<div class="promo promo-feedback">
		<div class="promo__wrapper promo-feedback__wrapper">
			<div class="promo__image-wrapper promo-feedback__image-wrapper" v-if="image">
		    <image-deferred :image="image" aspect="image-deffered--size-1-1"></image-deferred>
      </div>
      <!-- <div class="promo__content-wrapper promo-feedback__content-wrapper"></div> -->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PromoFeedback',

		props: ['item'],

		computed: {
			image () {
				if (typeof this.item.image === 'string') {
					return {
						url: this.item.image,
					};
				}

				return this.item.image;
			},
		},
	};
</script>

<style lang="scss">
	.promo-feedback {
		width: 300px;
		overflow: hidden;
	}

	.promo-feedback__wrapper {
		position: relative;
		transition: transform linear 0.4s;
		transform: scale(1.05);

		&:hover {
			transform: scale(1);

			.promo-feedback__content-wrapper {
				opacity: 1;
			}
		}
	}

	.promo-feedback__image-wrapper {

	}

	.promo-feedback__content-wrapper {
		position: absolute;
		margin: 5%;
		height: 90%;
		width: 90%;
		left: 0;
		top: 0;
		opacity: 0;
		background: $glass3;
		transition: opacity linear 0.4s;
	}
</style>
