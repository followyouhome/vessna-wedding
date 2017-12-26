<template>
  <main id="article">
    <module-related-posts ></module-related-posts>
    <module-article v-bind:article="article"></module-article>
  </main>
</template>

<script>
  import ModuleArticle from '../module/module-article.vue';
  import ModuleRelatedPosts from '../module/module-related-posts.vue';

  export default {
    name: 'page-article',

    components: {
      'module-article': ModuleArticle,
      'module-related-posts': ModuleRelatedPosts,
    },

    asyncData ({ store, route }) {
      return Promise.all([
        store.dispatch('fetch', {
          endpoint: 'config',
          namespace: 'config',
          id: 'navigation'
        }),

        store.dispatch('fetchAll', {
          endpoint: 'news'
        }),

        store.dispatch('fetchMain', {
          endpoint: 'news',
          id: route.params.news
        })
      ])
    },

    computed: {
      article () {
        return this.$store.state['news'].find(element => {
          return element.slug === this.$route.params.news;
        });
      }
    }
  }
</script>
