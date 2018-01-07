<template>
  <div>
    <module-related-posts></module-related-posts>


    <module-promo-cards v-bind:items="prom"></module-promo-cards>
  </div>
</template>

<script>
  import ModuleRelatedPosts from '../module/module-related-posts.vue';
  import ModulePromoCards from '../module/module-promo-cards.vue';

  export default {
    name: 'page-homepage',

    components: {
      'module-related-posts': ModuleRelatedPosts,
      'module-promo-cards': ModulePromoCards,
    },

    asyncData ({ store, route }) {
      return Promise.all([
        store.dispatch('fetch', {
          endpoint: 'config',
          namespace: 'config',
          id: 'navigation'
        }),

        store.dispatch('fetch', {
          endpoint: 'pages',
          namespace: 'pages',
          id: 'homepage'
        }),

        store.dispatch('fetchAll', {
          endpoint: 'news'
        })
      ])
    },

    computed: {
      wedding () {
        return this.$store.state.pages.homepage.wedding;
      },
      prom () {
        return this.$store.state.pages.homepage.prom;
      }
    }
  }
</script>
