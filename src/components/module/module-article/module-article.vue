<template>
	<article class="module module-article" v-if="result">
		<div class="module__wrapper module-article__wrapper container" v-html="result"/>
	</article>
</template>

<script>
	import Module from '@/components/module/module';

	export default {
		name: 'ModuleArticle',

		extends: Module,

		props: {
			/**
			 * Article text with HTML markup
			 */
			article: {
				type: String,
				default: '',
			},
		},

		data () {
			let article = this.article;

			if (article && this.amp) {
				article = this.replaceImgWithAMP(article);
			}

			return {
				result: article,
			};
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

			replaceImgWithAMP (text) {
				const regex = /<img.*?src="([^"]*)".*?>/g;
				const template = `
					<amp-img
						src="$1"
						width="1.5"
						height="1"
						layout="responsive"
					/>
				`;

				return text.replace(regex, template);
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
		margin: auto;
		padding: 30px;
		background: $white;
		box-shadow: 0px 0px 10px 5px $gray1;
		font: 1rem/1.5 $Default;

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
			font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
			line-height: 24px;
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
