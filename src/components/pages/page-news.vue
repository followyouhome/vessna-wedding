<template>
  <main id="article">
    <module-related-posts ></module-related-posts>
    <module-article v-bind:article="article"></module-article>
  </main>
</template>

<script>
  import Page from './page.vue';
  import ModuleArticle from '../module/module-article.vue';
  import ModuleRelatedPosts from '../module/module-related-posts.vue';

  import store from '../../core/store.js';

  function fetch(store, route) {
    return Promise.all([
      store.dispatch('fetchAll', {
        endpoint: 'news'
      }),

      store.dispatch('fetchMain', {
        endpoint: 'news',
        id: route.params.news
      })
    ])
  }

  export default {
    name: 'page-article',

    extends: Page,

    components: {
      'module-article': ModuleArticle,
      'module-related-posts': ModuleRelatedPosts,
    },

    asyncData ({ store, route }) {
      return Promise.all([
        this.extends.asyncData({store, route}),
        fetch(store, route)
      ])
    },

    beforeRouteEnter (to, from, next) {
      __VUE_ENV__ === 'server' ? next() : fetch(store, to).then(() => next())
    },

    beforeRouteUpdate (to, from, next) {
      __VUE_ENV__ === 'server' ? next() : fetch(store, to).then(() => next())
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
