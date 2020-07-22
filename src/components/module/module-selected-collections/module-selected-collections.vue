<template>
	<div class="module module-selected-collections">
    <div class="module__wrapper module-selected-collections__wrapper">
			<promo-collection v-for="item in items" v-bind:item="item" v-bind:key="item.slug"></promo-collection>
    </div>
	</div>
</template>

<script>
	import PromoCollection from '@/components/promo/promo-collection/promo-collection.vue';

	export default {
		name: 'ModuleSelectedCollections',

		props: ['items'],

		components: {
			'promo-collection': PromoCollection,
		},
	};
</script>

<style lang="scss">
  .module-selected-collections__wrapper {
    display: flex;
    padding: 10px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: stretch;
    align-content: center;
    background: #f3f0ec;
    border: 1px solid #e6e6e6;

    .promo {
      width: 100%;

      .promo-collection__wrapper {
        background: none
      }
    }
  }

  @media #{$tablet} {
    .module-selected-collections__wrapper {
        display: block
    }
  }
</style>
