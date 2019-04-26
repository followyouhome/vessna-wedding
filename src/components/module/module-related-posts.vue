<template>
	<div class="module module-related-posts" :class="flickity && 'module-related-posts--is-flickity'" ref="carousel" v-if="show">
    <div class="module__wrapper module-related-posts__wrapper">
			<promo-topical v-for="post in posts" v-bind:item="post" v-bind:key="post.slug"></promo-topical>
    </div>
	</div>
</template>

<script>
	import isMobile from 'ismobilejs';

	import PromoTopical from '../promo/promo-topical.vue';

	const POST_LIMIT = 7;

	export default {
		name: 'ModuleRelatedPosts',

		props: ['news'],

		components: {
			'promo-topical': PromoTopical,
		},

		data () {
			return {
				show: true,
				flickity: null,
			};
		},

		computed: {
			posts () {
				return this.news && this.news.slice(0, POST_LIMIT);
			},
		},

		watch: {
			posts () {
				this.restartComponent();
			}
		},

		mounted () {
			if (!isMobile.phone && !isMobile.tablet) {
				this.initFlickity();

			} else {
				this.initDefault();
			}
		},

		methods: {
			initFlickity () {
				const Flickity = require('flickity');
				this.flickity = new Flickity(this.$refs.carousel, {
					accessibility: true,
					adaptiveHeight: false,
					autoPlay: false,
					cellAlign: 'left',
					cellSelector: 'li, .promo',
					contain: false,
					draggable: true,
					lazyLoad: false,
					percentPosition: true,
					prevNextButtons: this.$refs.carousel.classList.contains('module--flickity-carousel--show-buttons') ? true : false,
					pageDots: this.$refs.carousel.classList.contains('module--flickity-carousel--show-dots') ? true : false,
					resize: true,
					setGallerySize: true,
					wrapAround: false,
				});

				setTimeout(() => {
				    this.flickity.resize();
				}, 3000);
			},

			initDefault () {
				let wrapper = this.$refs.carousel.querySelector('.module__wrapper'),
					items = Array.prototype.slice.call(this.$refs.carousel.querySelectorAll('.promo'));

				if (!wrapper) {
					return;
				}

				this.$refs.carousel.style.overflow = 'scroll';

				wrapper.style.width = items.reduce(function (width, item) {
					width = width.offsetWidth || width;

					return width += item.offsetWidth;
				}) + 'px';
			},

			restartComponent () {
				this.flickity.destroy();
				this.show = false;
				this.$nextTick(() => {
          this.show = true;
					this.$nextTick(() => {
						this.initFlickity();
					});
	      });
			}
		},
	};
</script>

<style lang="scss" scoped>
	.module-related-posts {
		padding: 10px 0 0;
    margin-top: 0;
		background: $gray2;
		overflow-x: scroll;

		&:focus {
			outline: none;
		}

		&--is-flickity {
			overflow-x: hidden;
		}

		.promo {
			flex-shrink: 0;
		}
	}

	.module-related-posts__wrapper {
		display: flex;
	}
</style>

<story group="Modules" name="Related Posts">
	<module-related-posts
		:news="[{
			name: 'Съемка свадебной коллекции 2018',
			promo: {
				media: 'image',
				image: {
					url: 'https://vessna.wedding/images/vessna-wedding-2018.jpg',
					height: 1280,
					width: 1920,
				},
				text: '',
				subline: '',
				headline: 'Съемка новой свадебной коллекции 2018 года',
				alt: ''
			},
			publishedDate: '2017-11-12T00:00:00.000Z',
			route: {
				params: {
					to: '#'
				},
			},
		}, {
			name: 'Съемка свадебной коллекции 2018',
			promo: {
				media: 'image',
				image: {
					url: 'https://vessna.wedding/images/vessna-wedding-2018.jpg',
					height: 1280,
					width: 1920,
				},
				text: '',
				subline: '',
				headline: 'Съемка новой свадебной коллекции 2018 года',
				alt: ''
			},
			publishedDate: '2017-11-12T00:00:00.000Z',
			route: {
				params: {
					to: '#'
				},
			},
		}].reduce((res, item, index, arr) => {
			return arr.concat(arr)
		})"
	/>
</story>
