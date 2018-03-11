<template>
    <div>
      <module-article v-if="article.content" v-bind:article="article"></module-article>
      <module-promo-cards v-if="collections" v-bind:items="collections"></module-promo-cards>
    </div>
</template>

<script>
  import Page from './page.vue';
  import ModuleArticle from '../module/module-article.vue';
  import ModulePromoCards from '../module/module-promo-cards.vue';

  import store from '../../core/store/';

  const FILTER = {
    '/wedding-dresses': 'wedding',
    '/prom-and-party-dresses': 'prom',
  };

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetchPage', {
        id: 'dress-collection',
        path: route.path.substr(1),
      }),

      store.dispatch('fetchAll', {
        endpoint: 'dress-collection',
      }),
    ]);
  }

  export default {
    name: 'page-dress-collection-hub',

    extends: Page,

    components: {
      'module-promo-cards': ModulePromoCards,
      'module-article': ModuleArticle,
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
      collections () {
        const collections = this.$store.state['dress-collection'];
        let result = {};

        for (let collection in collections) {
          if (collections[collection].type == FILTER[this.$route.path]) {
            result[collection] = collections[collection];
          }
        }

        return result;
      },

      article () {
        return this.$store.state.pages['dress-collection'];
      },

      seo () {
        return this.$store.state.pages['dress-collection'].seo;
      },
    },
  };
</script>

<style lang="scss">

</style>
