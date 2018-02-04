<template>
  <div>
    <module-related-posts v-bind:news="news"></module-related-posts>
    <div class="module module--article">
      <div class="module__wrapper module--article__wrapper">
          <h2>Свадебные и вечерние платья оптом</h2>
      </div>
    </div>
    <module-selected-collections v-bind:items="wedding"></module-selected-collections>
    <div class="module module--article">
      <div class="module__wrapper module--article__wrapper">
          <h2>Вечерние платья оптом</h2>
      </div>
    </div>
    <module-promo-cards v-bind:items="prom"></module-promo-cards>
    <promo-full-screen-quote></promo-full-screen-quote>
    <promo-subscribe/>
  </div>
</template>

<script>
  import Page from './page.vue';
  import ModuleRelatedPosts from '../module/module-related-posts.vue';
  import ModuleSelectedCollections from '../module/module-selected-collections.vue';
  import ModulePromoCards from '../module/module-promo-cards.vue';
  import PromoFullScreenQuote from '../promo/promo-full-screen-quote.vue';
  import PromoSubscribe from '../promo/promo-subscribe.vue';


  import store from '../../core/store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetchPage', {
        id: 'homepage',
      }),

      store.dispatch('fetchAll', {
        endpoint: 'news',
      }),
    ]);
  }

  export default {
    name: 'page-homepage',

    extends: Page,

    components: {
      'module-related-posts': ModuleRelatedPosts,
      'module-promo-cards': ModulePromoCards,
      'module-selected-collections': ModuleSelectedCollections,
      'promo-full-screen-quote': PromoFullScreenQuote,
      'promo-subscribe': PromoSubscribe,
    },

    metaInfo () {
      return {
        title: this.seo.name,
        meta: [
          { name: 'description', content: this.seo.description },
        ],
      };
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

      wedding () {
        return this.$store.state.pages.homepage.wedding;
      },

      prom () {
        return this.$store.state.pages.homepage.prom;
      },

      seo () {
        return this.$store.state.pages.homepage.seo;
      },
    },
  };
</script>

<style lang="scss">

</style>
