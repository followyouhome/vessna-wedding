<template>
	<article class="module module-article" v-if="article">
		<b-container class="module__wrapper module-article__wrapper" v-html="article" />
	</article>
</template>

<script>
	export default {
		name: 'ModuleArticle',

		props: ['article'],
	};
</script>

<style lang="scss">
	@include animation-fade-in('article');

	.module-article {
		animation: animation-fade-in-article 0.2s linear;
	}

	.module-article__wrapper {
		padding: 30px;
		background: $white;

		h1 {

		}

		h2 {

		}

		h3 {

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

		p {
			color: $dark;
		}

		a {
			color: $black;
			text-decoration: underline;
		}

		strong {

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
