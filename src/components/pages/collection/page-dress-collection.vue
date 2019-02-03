<template>
  <main>
    <module-article :article="description" v-if="description"/>
    <module-grid-dress :items="dresses" v-if="dresses"/>
    <module-shared-folder :resources="resources" v-if="resources"/>
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import ModuleArticle from '@/components/module/module-article.vue';
  import ModuleDressCollection from '@/components/module/module-grid-dress.vue';
  import ModuleSharedFolder from '@/components/module/module-shared-folder.vue';
  import ModuleFeedbackGrid from '@/components/module/module-feedback-grid.vue';

  import store from '@/store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/collection/' + route.params.slug,
      }),
    ]);
  }

  export default {
    name: 'PageDressCollection',

    extends: Page,

    components: {
      'module-article': ModuleArticle,
      'module-grid-dress': ModuleDressCollection,
      'module-shared-folder': ModuleSharedFolder,
      'module-feedback-grid': ModuleFeedbackGrid,
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
      dresses () {
        return this.$store.state.page.dresses;
      },

      resources () {
        return this.$store.state.page.resources;
      },

      description () {
        return this.$store.state.page.description;
      },
    },
  };
</script>
