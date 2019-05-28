<template>
	<article class="module module-article" v-if="article">
		<b-container class="module__wrapper module-article__wrapper" v-html="article" />
	</article>
</template>

<script>
	export default {
		name: 'ModuleArticle',

		props: ['article'],

		mounted () {
			if (__VUE_ENV__ === 'client') {
				this.initIsotope();
			}
		},

		methods: {
			initIsotope () {
				const el = this.$el.querySelector('.module-article__isotope');

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
			font: 4rem/1 $RistrettoProLight;
		}

		h2 {
			margin: 2rem 0;
			letter-spacing: 0;
			text-align: center;
			font: 3rem/1 $RistrettoProLight;
			color: $black;

			@media #{$phablet} {
				margin: 1.5rem 0;
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

<story group="Modules" name="Article">
	<module-article
		:article="`
			<h1>123</h1>


			<ul>
				<li>Дата проведения выставки: <strong>с 8 по 9 июня</strong></li>
				<li>Место проведения:</li>
				<li>Наш стенд:</li>
				<li>Часы работы: суббота 10:00 - 18:00, воскресенье 10:00 - 17:00</li>
			</ul>

			<p>Для посещения выставки желательно пройти регистрацию на сайте организатора </p>

		`"
	/>
</story>
