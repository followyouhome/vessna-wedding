<template>
	<div class="module module--selected-collections">
    <div class="module__wrapper module--selected-collections__wrapper">
			<promo-collection v-for="item in items" v-bind:item="item" v-bind:key="item.slug"></promo-collection>
    </div>
	</div>
</template>

<script>
	import PromoCollection from '../promo/promo-collection.vue';

	export default {
		name: 'module-selected-collections',

		props: ['items'],

		components: {
			'promo-collection': PromoCollection
		},

		asyncData ({ store }) {
			return store.dispatch('fetch', {
				endpoint: 'news'
			});
		},

		computed: {
			news () {
				return this.$store.state.news;
			}
		}
	}
</script>

<style>

</style>
