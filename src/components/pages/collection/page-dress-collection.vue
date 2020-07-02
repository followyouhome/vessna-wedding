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
  import { ModuleArticle, ModuleGridDress, ModuleCollectionControl, ModuleSharedFolder, ModuleFeedbackGrid } from '@/components/module';
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
      'module-grid-dress': ModuleGridDress,
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
        filteredDresses: null,
      };
    },

    computed: {
      currency () {
        return this.$store && this.$store.state && this.$store.state.user && this.$store.state.user.access && this.$store.state.user.access.currency;
      },

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

    methods: {
      updateFilter (filter) {
        this.filteredDresses = null;
        this.$nextTick();
        this.filteredDresses = this.dresses;

        if (filter.min) {
          this.filteredDresses = this.filteredDresses.filter(item => item.price[this.currency] >= filter.min);
        }

        if (filter.max) {
          this.filteredDresses = this.filteredDresses.filter(item => item.price[this.currency] <= filter.max);
        }

        if (filter.columns) {

        }
      },
    },

    mounted () {
      this.filteredDresses = this.dresses;
    },

    updated () {
      this.filteredDresses = this.dresses;
    },
  };
</script>
