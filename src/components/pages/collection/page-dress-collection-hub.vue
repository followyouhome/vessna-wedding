<template>
    <div>
      <!-- <module-article v-if="article.content" v-bind:article="article"></module-article> -->
      <module-promo-cards v-if="collections" v-bind:items="collections"></module-promo-cards>
    </div>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import ModuleArticle from '@/components/module/module-article.vue';
  import ModulePromoCards from '@/components/module/module-promo-cards.vue';

  import store from '@/store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/collection?slug=' + route.path.replace(/\//g, ''),
      }),
    ]);
  }

  export default {
    name: 'PageDressCollectionHub',

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
        return this.$store.state.page.collections;
      },
    },
  };
</script>

<style lang="scss">

</style>
