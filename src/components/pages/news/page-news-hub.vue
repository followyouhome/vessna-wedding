<template>
  <module-grid-news v-bind:news="news"></module-grid-news>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import ModuleGridNews from '@/components/module/module-grid-news.vue';

  import store from '@/store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/news',
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
        return this.$store.state.page.news;
      },
    },
  };
</script>
