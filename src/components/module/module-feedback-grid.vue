<template>
	<b-container class="module module-feedback-greed">
		<div class="module__wrapper module-feedback-greed__wrapper">
			<promo-label class="module-feedback-greed__promo" :item="label"/>
			<promo-feedback class="module-feedback-greed__promo" v-for="feedback in limitedFeedbacks" :item="feedback" :key="feedback.name"/>
		</div>
	</b-container>
</template>

<script>
	import { PromoLabel, PromoFeedback } from '@/components/promo';

	export default {
		name: 'ModuleFeedbackGrid',

		props: ['feedbacks'],

		components: {
			'promo-label': PromoLabel,
			'promo-feedback': PromoFeedback,
		},

		data () {
			return {
				label: {
					headline: '#vessna2019',
		      copy: 'К открытию сезона 2020',
		      button: {
		        text: 'Открыть Instagram',
		        href: 'https://instagram.com/vessna_dress',
		      },
				},
			};
		},

		computed: {
			limitedFeedbacks () {
				return this.feedbacks && this.feedbacks.slice(0, 5);
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

	.module-feedback-greed__wrapper {
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}

	.module-feedback-greed__promo {
		&:nth-child(1) {
			width: 50%;
			align-self: flex-end;
		}

		&:nth-child(2) {
			width: 50%;
			align-self: flex-end;
		}

		&:nth-child(3) {
			width: 15%;
		}

		&:nth-child(4) {
			width: 35%;
		}

		&:nth-child(5) {
			width: 30%;
		}

		&:nth-child(6) {
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

<story group="Modules" name="Feedback Grid">
	<module-feedback-grid
		:feedbacks="[{
			image: {
				height: 336,
				width: 269,
				url: 'https://marymaximca.cdn.speedyrails.net/media/catalog/product/cache/83cda418bea4fb032eada316ef024fcb/f/p/fp9458_rev_1.jpg'
			}
		}, {
			image: {
				height: 336,
				width: 269,
				url: 'http://timelesslinen.com/wp-content/uploads/2018/04/Linen-Pinafore-apron-Kids-Gold.jpg'
			}
		}, {
			image: {
				height: 336,
				width: 269,
				url: 'https://i.etsystatic.com/9281366/c/1019/809/0/329/il/4e8b76/1223235278/il_340x270.1223235278_93v0.jpg'
			}
		}, {
			image: {
				height: 336,
				width: 269,
				url: 'https://i.pinimg.com/236x/f5/2a/ed/f52aed5c13c3f62aea826bf7b71fcad1--blue-wedding-dresses-blue-weddings.jpg'
			}
		}, {
			image: {
				height: 336,
				width: 269,
				url: 'https://st2.depositphotos.com/3647147/11127/i/950/depositphotos_111275726-stock-photo-beauty-woman-clever-smart-girl.jpg'
			}
		}, {
			image: {
				height: 336,
				width: 269,
				url: 'https://marymaximca.cdn.speedyrails.net/media/catalog/product/cache/83cda418bea4fb032eada316ef024fcb/f/p/fp9458_rev_1.jpg'
			}
		}]"
	/>
</story>
