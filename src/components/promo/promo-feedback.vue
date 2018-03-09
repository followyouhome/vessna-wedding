<template>
	<div class="promo promo--feedback">
		<div class="promo__wrapper promo--feedback__wrapper">
			<div class="promo__image-wrapper promo--feedback__image-wrapper" v-if="image">
		    <image-deferred :image="image" :aspect="'image-deffered--size-1-1'"></image-deferred>
      </div>
			<!--
      <div class="promo__content-wrapper promo--feedback__content-wrapper">
    		<div class="promo__avatar promo--feedback__avatar">
  		    <image-deferred v-bind:image="promo.user_pic"></image-deferred>
            <figure class="image-regular image-deffered--size-2-3">
              <img src="[[+user_pic]]" class="image-regular__image" alt="[[+first_name]] [[+last_name]]">
            </figure>
          </div>
          <a class="promo--feedback__subheadline" href="//vk.com/id[[+uid]]" target="_blank" rel="nofollow">
            <p class="promo__text-subheadline">[[+first_name]] [[+last_name]]</p>
          </a>
	    		<hr class="promo__text-line">
          <div class="promo--feedback__copy">
            <p class="promo__text-copy">[[+text_content]]</p>
          </div>
          <a class="promo--feedback__footnote" href="[[+wall_link]]" target="_blank" rel="nofollow">
            <span class="promo__text-footnote">Читать далее</span>
          </a>
      </div> -->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'promo-feedback',

		props: ['feedback'],

		computed: {
			image () {
				return {
					url: this.feedback.link || this.feedback.image,
				};
			},
		},
	};
</script>

<style lang="scss">
	$userpicSize: 60px;

	.promo--feedback {
		width: 300px;
	}

	.promo--feedback__content-wrapper {
		position: relative;
		padding: 0 40px 20px;
		width: 100%;

		@media #{$tablet} {
			padding: 0 25px 25px;
		}

		@media #{$phablet} {
			padding: 0 20px 20px;
		}
	}

	.promo--feedback__avatar {
		position: relative;
		left: 0;
		right: 0;
		margin: auto;
		width: $userpicSize;
		height: $userpicSize;
		margin-top: -$userpicSize / 2;
		margin-bottom: 20px;
		overflow: hidden;

		@media #{$phablet} {
			margin-bottom: 15px;
		}

		img {
			border-radius: $userpicSize;
		}
	}

	.promo--feedback__subheadline {
		display: block;
		text-align: center;
	}

	.promo--feedback__copy {

	}

	.promo--feedback__footnote {
		display: inline-block;
	}
</style>
