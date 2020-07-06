<template>
	<div class="module module-feedback-greed container">
		<div class="module__wrapper module-feedback-greed__wrapper">
			<promo-label class="module-feedback-greed__promo" :item="label"/>
			<promo-feedback class="module-feedback-greed__promo" v-for="feedback in limitedFeedbacks" :item="feedback" :key="feedback.name"/>
		</div>
	</div>
</template>

<script>
	import PromoLabel from '@/components/promo/promo-label/promo-label.vue';
	import PromoFeedback from '@/components/promo/promo-feedback/promo-feedback.vue';

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
