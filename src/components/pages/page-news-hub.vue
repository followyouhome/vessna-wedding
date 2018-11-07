<template>
  <module-grid-news v-bind:news="news"></module-grid-news>
</template>

<script>
  import Page from './page.vue';
  import ModuleGridNews from '../module/module-grid-news.vue';

  import store from '../../store/';

  function fetch(store, route) {
    return Promise.all([
      store.dispatch('fetchPage', {
        id: 'news',
      }),

      store.dispatch('fetchAll', {
        endpoint: 'news',
      }),
    ]);
  }

  export default {
    name: 'page-news-hub',

    extends: Page,

    components: {
      'module-grid-news': ModuleGridNews,
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
        return this.$store.state.news;
      },

      seo () {
        return this.$store.state.pages.news.seo;
      },
    },
  };
</script>
