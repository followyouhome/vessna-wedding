<template>
    <div style="background: white;">
      <module-promo-cards v-if="actual" :items="actual"/>
      <module-article v-if="article" :article="article"/>
      <module-call-to-action
        :content="callToAction.content"
        :button="callToAction.button"
      />
      <module-selected-collections v-if="archive" :items="archive"/>
    </div>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import { ModuleArticle, ModulePromoCards, ModuleCallToAction, ModuleSelectedCollections } from '@/components/module';

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
      'module-article': ModuleArticle,
      'module-promo-cards': ModulePromoCards,
      'module-call-to-action': ModuleCallToAction,
      'module-selected-collections': ModuleSelectedCollections,
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

    data () {
      return {
        callToAction: {
          content: {
            headline: 'Готовы стать нашим партнёром?',
            subline: 'Заполните анкету и наш менеджер свяжется с вами',
          },
          button: {
            action: '',
            text: 'Заполните анкету',
          },
        },
      };
    },

    computed: {
      article () {
        return this.$store.state.page.content;
      },

      /**
       * List of actual collection displayed at the top of the page
       */
      actual () {
        return this.$store.state.page.actual;
      },

      /**
       * List of archived collections displayed at the bottom of the page
       */
      archive () {
        return this.$store.state.page.archive;
      },
    },
  };
</script>

<style lang="scss">

</style>
