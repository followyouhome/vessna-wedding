<template>
  <div>
    <h1>Welcome2132</h1>
    <module-related-posts></module-related-posts>
  </div>
</template>

<script>
  import ModuleRelatedPosts from '../module/module-related-posts.vue';

  export default {
    name: 'page-homepage',

    components: {
      'module-related-posts': ModuleRelatedPosts,
    },

    asyncData ({ store, route }) {
      return Promise.all([
        store.dispatch('fetch', {
          endpoint: 'config',
          namespace: 'config',
          id: 'navigation'
        }),
        
        store.dispatch('fetch', {
          slug: route.params.slug,
          endpoint: 'news'
        })
      ])
    },

    computed: {
      news () {
        // return this.$store.state.news;
      }
    }
  }
</script>