<template>
  <main id="article">
    <module-related-posts></module-related-posts>
    <module-social-sidebar></module-social-sidebar>
    <module-article></module-article>
  </main>
</template>

<script>
  import ModuleArticle from '../module/module-article.vue';
  import ModuleRelatedPosts from '../module/module-related-posts.vue';
  import ModuleSocialSidebar from '../module/module-social-sidebar.vue';

  export default {
    name: 'page-article',

    components: {
      'module-article': ModuleArticle,
      'module-related-posts': ModuleRelatedPosts,
      'module-social-sidebar': ModuleSocialSidebar
    },

    asyncData ({ store, route }) {
      return store.dispatch('fetch', {
        slug: route.params.slug,
        endpoint: 'news'
      });
    },

    computed: {
      news () {
        return this.$store.state.news;
      }
    }
  }
</script>
