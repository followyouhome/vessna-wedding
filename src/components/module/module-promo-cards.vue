<template>
	<div class="module module-promo-cards">
    <div class="module__wrapper module-promo-cards__wrapper">
			<promo-card v-for="item in items" v-bind:item="item" v-bind:key="item.slug"></promo-card>
    </div>
	</div>
</template>

<script>
	import PromoCard from '../promo/promo-card.vue';

	export default {
		name: 'module-promo-cards',

		props: ['items'],

		components: {
			'promo-card': PromoCard,
		},

		asyncData ({ store }) {
			return store.dispatch('fetch', {
				endpoint: 'news',
			});
		},

		computed: {
			news () {
				return this.$store.state.news;
			},
		},
	};
</script>

<style lang="scss">
	.module-promo-cards {
		background: $gray2;
	}
</style>
