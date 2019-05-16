<template>
  <main>
    <module-collection-control :items="dresses" v-if="dresses" @update="updateFilter"/>
    <module-grid-dress :items="filteredDresses" v-if="filteredDresses"/>
    <module-article :article="description" v-if="description"/>
    <module-shared-folder :resources="resources" v-if="resources"/>
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import ModuleArticle from '@/components/module/module-article.vue';
  import ModuleDressCollection from '@/components/module/module-grid-dress.vue';
  import ModuleCollectionControl from '@/components/module/module-collection-control';
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
      'module-collection-control': ModuleCollectionControl,
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

    data () {
      return {

      };
    },

    computed: {
      dresses () {
        return this.$store.state.page.dresses;
      },

      filteredDresses: {
        get () {
          return this.dresses;
        },
        set () {

        },
      },

      resources () {
        return this.$store.state.page.resources;
      },

      description () {
        return this.$store.state.page.description;
      },
    },

    methods: {
      updateFilter (filter) {
        this.filteredDresses = null;
        this.$nextTick();
        this.filteredDresses = this.dresses;

        if (filter.min) {
          this.filteredDresses = this.filteredDresses.filter(item => item.price.usd >= filter.min);
        }

        if (filter.max) {
          this.filteredDresses = this.filteredDresses.filter(item => item.price.usd <= filter.max);
        }

        if (filter.columns) {

        }
      },
    },
  };
</script>
