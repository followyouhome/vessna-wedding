<template>
  <div>
    <module-related-posts v-bind:news="news"/>
    <div class="module module--article">
      <div class="module__wrapper module--article__wrapper">
          <h2>Свадебные и вечерние платья оптом</h2>
      </div>
    </div>
    <module-selected-collections :items="wedding"/>
    <div class="module module--article">
      <div class="module__wrapper module--article__wrapper">
          <h2>Вечерние платья оптом</h2>
      </div>
    </div>
    <module-promo-cards :items="prom"/>
    <module-feedback-grid :feedbacks="feedbacks"/>
    
  </div>
</template>

<script>
  import Page from './page.vue';
  import ModulePromoCards from '@/components/module/module-promo-cards.vue';
  import ModuleRelatedPosts from '@/components/module/module-related-posts.vue';
  import ModuleFeedbackGrid from '@/components/module/module-feedback-grid.vue';
  import ModuleSelectedCollections from '@/components/module/module-selected-collections.vue';
  import PromoFullScreenQuote from '@/components/promo/promo-full-screen-quote.vue';

  import store from '../../store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/homepage',
      }),
    ]);
  }

  export default {
    name: 'PageHomepage',

    extends: Page,

    components: {
      'module-promo-cards': ModulePromoCards,
      'module-feedback-grid': ModuleFeedbackGrid,
      'module-related-posts': ModuleRelatedPosts,
      'module-selected-collections': ModuleSelectedCollections,
      'promo-full-screen-quote': PromoFullScreenQuote,
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

      prom () {
        return this.$store.state.page.prom;
      },

      wedding () {
        return this.$store.state.page.wedding;
      },

      feedbacks () {
        return this.$store.state.page.feedbacks;
      },
    },
  };
</script>

<style lang="scss">
  .module--article {
    background: $gray2;
  }
</style>
