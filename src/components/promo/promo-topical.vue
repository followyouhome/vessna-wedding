<template>
	<div class="promo promo--topical promo--effect-click promo--width-2">
    <div class="promo__wrapper promo--topical__wrapper">
      <router-link class="promo__image-wrapper promo--topical__image-wrapper" v-bind:to="{ name: 'page-news', params: { news: promo.slug }}">
          <image-deferred v-bind:image="promo.image" v-bind:aspect="'image-deffered--size-1-2'"></image-deferred>
      </router-link>
      <div class="promo__content-wrapper promo--topical__content-wrapper">
        <router-link class="promo--topical__headline" v-bind:to="{ name: 'page-news', params: { news: promo.slug }}">
        	<h4 class="promo__text-headline">{{ promo.headline }}</h4>
        </router-link>
      </div>
    </div>
	</div>
</template>

<script>
	export default {
		name: 'promo-topical',

		props: ['promo']
	}
</script>

<style lang="scss">

</style>
