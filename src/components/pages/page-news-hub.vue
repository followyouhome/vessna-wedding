<template>
  <module-grid-news v-bind:news="news"></module-grid-news>
</template>

<script>
  import ModuleGridNews from '../module/module-grid-news.vue';

  export default {
    name: 'page-news-hub',

    asyncData ({ store, route }) {
      return Promise.all([
        store.dispatch('fetch', {
          endpoint: 'config',
          namespace: 'config',
          id: 'navigation'
        }),

        store.dispatch('fetch', {
          endpoint: 'news'
        })
      ])
    },

    components: {
      'module-grid-news': ModuleGridNews
    },

    computed: {
      news () {
        return this.$store.state.news;
      }
    }
  }
</script>
