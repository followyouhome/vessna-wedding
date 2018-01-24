<template>
    <div>
      <module-article v-bind:article="article"></module-article>
      <module-promo-cards v-bind:items="collections"></module-promo-cards>
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
        let collections = {};

        for (let collection in this.$store.state['dress-collection']) {
          if (this.$store.state['dress-collection'][collection].type == FILTER[this.$route.path]) {
            collections[collection] = this.$store.state['dress-collection'][collection];
          }
        }

        return collections;
      },
      article () {
        return this.$store.state.pages['dress-collection'];
      },
    },
  };
</script>
