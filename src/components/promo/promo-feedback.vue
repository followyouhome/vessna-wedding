<template>
	<div class="promo promo--feedback promo--effect-fadein promo--width-2">
		<div class="promo__wrapper promo--feedback__wrapper">
			<div class="promo__image-wrapper promo--feedback__image-wrapper">
		    <image-deferred v-bind:image="promo.photo"></image-deferred>
      </div>
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
      </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'promo-feedback',

		props: ['promo']
	}
</script>

<style lang="scss">

</style>
