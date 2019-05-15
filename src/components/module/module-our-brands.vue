<template>
	<b-container class="module module-our-brands">
		<div class="module__wrapper module-our-brands__wrapper">
			<promo-brand class="module-our-brands__promo" v-for="item in brands" :item="item" :key="item.name"/>
		</div>
	</b-container>
</template>

<script>
	import PromoBrand from '@/components/promo/promo-brand.vue';

	export default {
		name: 'ModuleOurBrands',

		props: ['brands'],

		components: {
			'promo-brand': PromoBrand,
		},

		data () {
			return {

			};
		},
	};
</script>

<style lang="scss">
	.module-our-brands {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .module-our-brands__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .module-our-brands__promo {

  }
</style>

<story group="Modules" name="Feedback Grid">
	<module-our-brands
		:brands="[{

		}]"
	/>
</story>
