<template>
	<div class="module module--related-posts flickity-carousels">
	    <div class="module__wrapper module--related-posts__wrapper">
			<promo-topical v-for="post in news" v-bind:promo="post"></promo-topical>  
	    </div>
	</div>
</template>

<script>
	import isMobile from 'ismobilejs'

	import PromoTopical from '../promo/promo-topical.vue';

	export default {
		name: 'module-related-posts',

		components: {
			'promo-topical': PromoTopical
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
		},

		mounted () {
			if (!isMobile.phone && !isMobile.tablet) {
				
				var Flickity = require('flickity');

				Array.from(document.querySelectorAll('.flickity-carousels')).forEach(function (element) {
					var flickity = new Flickity(element, {
						accessibility: true,
						adaptiveHeight: false,                                      //If false - initial height is the max required height
						autoPlay: false,
						cellAlign: 'left',
						cellSelector: 'li, .promo',
						contain: false,
						draggable: true,
						lazyLoad: false,
						percentPosition: true,
						prevNextButtons: element.classList.contains('module--flickity-carousel--show-buttons') ? true : false,
						pageDots: element.classList.contains('module--flickity-carousel--show-dots') ? true : false,
						resize: true,
						setGallerySize: true,
						wrapAround: false
					});

					// setTimeout(function() {
					//     flickity.resize();
					// }, 3000);
				});
				
			} else {
				Array.from(document.querySelectorAll('.flickity-carousels')).forEach(function (carousel) {
					var wrapper = carousel.querySelector('.module__wrapper'),
						items = Array.prototype.slice.call(carousel.querySelectorAll('.promo'));

					if(!wrapper) {
						return;
					}

					carousel.style.overflow = 'scroll';

					wrapper.style.width = items.reduce(function(width, item) {
						width = width.offsetWidth || width;

						return width += item.offsetWidth;
					}) + 'px';
				});
			}
		}
	}
</script>

<style>

</style>