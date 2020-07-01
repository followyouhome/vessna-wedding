<template>
	<article class="module module-article" v-if="article">
		<b-container class="module__wrapper module-article__wrapper" v-html="article" />
	</article>
</template>

<script>
	export default {
		name: 'ModuleArticle',

		props: {
			/**
			 * Article text with HTML markup
			 */
			article: {
				type: String,
				default: '',
			},
		},

		mounted () {
			if (__VUE_ENV__ === 'client') {
				this.initIsotope();
			}
		},

		methods: {
			initIsotope () {
				const el = this.$el && this.$el.querySelector && this.$el.querySelector('.module-article__isotope');

				if (el) {
					require.ensure(['isotope-layout'], require => {
            const Isotope = require('isotope-layout');

            this.isotope = new Isotope(el, {
              itemSelector: 'img',
              layoutMode: 'masonry',
							masonry: {
							  columnWidth: 'img',
							},
            });

						setInterval(() => {
							this.isotope.layout();
						}, 2000);
          });
				}
			},
		},
	};
</script>

<style lang="scss">
	@include animation-fade-in('article');

	.module-article {
		margin: 10px 0;
		padding: 15px;
		animation: animation-fade-in-article 0.2s linear;
	}

	.module-article__wrapper {
		padding: 30px;
		background: $white;
		box-shadow: 0px 0px 10px 5px $gray1;

		@media #{$phablet} {
			padding: 20px;
		}

		h1 {
			margin: 2rem 0;
			letter-spacing: 0;
			text-align: center;
			font: 4rem/1 $RistrettoProLight;
			color: $black;

			@media #{$phablet} {
				margin: 1.5rem 0;
				text-align: center;
			}
		}

		h2 {
			margin: 2rem 0;
			letter-spacing: 0;
			text-align: center;
			font: 3rem/1 $RistrettoProLight;
			color: $black;

			@media #{$phablet} {
				margin: 1.5rem 0;
				text-align: center;
			}
		}

		h3 {
			margin: 2rem 0;
			letter-spacing: 0;
			text-align: center;
			font: 2rem/1 $RistrettoProLight;
			color: $black;

			@media #{$phablet} {
				margin: 1rem 0;
				text-align: center;
			}
		}

		h4 {

		}

		h5 {

		}

		h6 {

		}

		ul {

		}

		li {

		}

		img {
			width: 100%;
		}

		video {
			width: 100%;
		}

		p {
			margin: 2rem 0;
			color: $dark;

			@media #{$phablet} {
				margin: 1rem 0;
			}
		}

		a {
			color: $black;
			text-decoration: underline;
		}

		strong {

		}
	}

	.module-article__isotope {
		font-size: 0;
		letter-spacing: 0;

		img {
			margin: 0.5%;
			width: 24%;

			@media #{$tablet} {
				margin: 0.5%;
				width: 32%;
			}

			@media #{$phablet} {
				margin: 1%;
				width: 48%;
			}
		}
	}
</style>
