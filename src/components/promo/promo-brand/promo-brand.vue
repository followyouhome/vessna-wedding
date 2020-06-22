<template>
	<div class="promo promo-brand">
		<div class="promo__wrapper promo-brand__wrapper">
		  <router-link class="promo__image-wrapper promo-brand__image-wrapper" v-if="item.promo.image" v-bind:to="item.route">
        <h5 class="promo-brand__headline">{{item.promo.headline}}</h5>
				<image-deferred aspect="image-deffered--size-2-3" v-bind:image="item.promo.image" />
			</router-link>
		</div>
	</div>
</template>

<script>
	import Promo from '../promo';

	export default {
		name: 'PromoBrand',

		extends: Promo,

		props: ['item'],
	};
</script>

<style lang="scss">
	.promo-brand {
		width: 250px;

		&:hover {
			.promo-news__wrapper {
				box-shadow: none;
			}
		}
	}

  .promo-brand__wrapper {

  }

  .promo-brand__image-wrapper {
    &:after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      opacity: 0.75;
      background-image: linear-gradient(-180deg,rgba(33,33,33,0) 0,#212121 100%);
    }
  }

  .promo-brand__headline {
    position: absolute;
    margin: auto;
    padding: 2rem;
    bottom: 0;
    right: 0;
    left: 0;
    top: 60%;
    z-index: $z-default;
    text-align: center;
    font: 2rem/1 $RistrettoProLight;
    color: $white;
  }
</style>
