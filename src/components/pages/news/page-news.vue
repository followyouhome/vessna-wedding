<template>
  <v-page>
    <template slot='content'>
      <main id="article">
        <module-related-posts :news="news"/>
        <module-article :article="article"/>
      </main>
    </template>
  </v-page>

</template>

<script>
  import Page from '@/components/pages/page.vue';
  import { ModuleArticle, ModuleRelatedPosts } from '@/components/module';

  import store from '@/store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/news/' + route.params.slug,
      }),
    ]);
  }

  export default {
    name: 'PageNews',

    extends: Page,

    components: {
      'v-page': Page,
      'module-article': ModuleArticle,
      'module-related-posts': ModuleRelatedPosts,
    },

    asyncData ({ store, route }) {
      return Promise.all([
        this.extends.asyncData({store, route}),
        fetch(store, route),
      ]);
    },

    beforeRouteEnter (to, from, next) {
      __VUE_ENV__ === 'server' ? next() : fetch(store, to).then(() => next());
    },

    beforeRouteUpdate (to, from, next) {
      __VUE_ENV__ === 'server' ? next() : fetch(store, to).then(() => next());
    },

    computed: {
      news () {
        return this.$store.state.page && this.$store.state.page.news;
      },

      article () {
        return this.$store.state.page && this.$store.state.page.content;
      },
    },
  };
</script>
