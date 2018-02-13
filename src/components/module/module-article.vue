<template>
	<article class="module module--article" v-if="article">
		<div class="module__wrapper module--article__wrapper" v-html="article.content">

		</div>
	</article>
</template>

<script>
	export default {
		name: 'module-article',

		props: ['article'],
	};
</script>

<style lang="scss">
	.module--article {
		background: $gray2;
	}
</style>
