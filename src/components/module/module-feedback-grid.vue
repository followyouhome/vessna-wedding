<template>
	<article class="module module-feedback-greed" v-if="feedbacks && feedbacks.links && feedbacks.links.length">
		<div class="module__wrapper">
			<div class="images-wrapper">
				<promo-feedback v-for="link in links" :feedback="link" :key="link.name"/>
			</div>
			<div class="text-wrapper">
				<div class="border">
					<div class="headline">
						{{headline}}
					</div>
				</div>
			</div>
		</div>
	</article>
</template>

<script>
	import PromoFeedback from '../promo/promo-feedback.vue';

	export default {
		name: 'module-feedback-grid',

		props: ['feedbacks'],

		components: {
			'promo-feedback': PromoFeedback,
		},

		computed: {
			headline () {
				return this.feedbacks.headline;
			},

			links () {
				return this.feedbacks.links;
			},
		},
	};
</script>

<style lang="scss">
	.module-feedback-greed {
		background: transparent;

		@media #{$mobile} {
			display: none;
		}
	}

	.module__wrapper {
		position: relative;
	}

	.text-wrapper {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;
		margin: auto;
		z-index: 501;
		padding: 20px;
		box-sizing: border-box;
		height: 350px;
		width: 460px;
		background: $glass3;

		@media #{$tablet} {
			height: 250px;
			width: 350px;
		}
	}

	.images-wrapper {
		display: flex;
		flex-wrap: wrap;
	}

	.border {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid $gray3;
	}

	.headline {
		font-family: 'Akzidenz Grotesk';
		font-size: 2.5rem;
		color: $black2;
	}

	.promo {
		&:nth-child(1) {
			width: 25%;
			align-self: flex-end;
		}

		&:nth-child(2) {
			width: 25%;
			align-self: flex-end;
		}

		&:nth-child(3) {
			width: 50%;
			align-self: flex-end;
		}

		&:nth-child(4) {
			width: 15%;
		}

		&:nth-child(5) {
			width: 35%;
		}

		&:nth-child(6) {
			width: 30%;
		}

		&:nth-child(7) {
			width: 20%;
		}

		@media #{$tablet} {
			&:nth-child(1) {
				width: 33%;
				align-self: flex-end;
			}

			&:nth-child(2) {
				width: 67%;
				align-self: flex-end;
			}

			&:nth-child(3) {
				width: 25%;
				align-self: flex-start;
			}

			&:nth-child(4) {
				width: 50%;
			}

			&:nth-child(5) {
				width: 25%;
			}

			&:nth-child(6) {
				display: none;
			}

			&:nth-child(7) {
				display: none;
			}
		}
	}
</style>
