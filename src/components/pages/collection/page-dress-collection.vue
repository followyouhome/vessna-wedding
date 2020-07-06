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
  import ModuleArticle from '@/components/module/module-article/module-article.vue';
  import ModuleCollectionControl from '@/components/module/module-collection-control/module-collection-control.vue';
  import ModuleSharedFolder from '@/components/module/module-shared-folder/module-shared-folder.vue';
  import ModuleFeedbackGrid from '@/components/module/module-feedback-grid/module-feedback-grid.vue';
  import ModuleGridDress from '@/components/module/module-grid-dress/module-grid-dress.vue';
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
        filter: {},
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

      filteredDresses () {
        let filteredDresses = this.dresses;

        if (this.filter.min) {
          this.filteredDresses = this.filteredDresses.filter(item => item.price[this.currency] >= this.filter.min);
        }

        if (this.filter.max) {
          this.filteredDresses = this.filteredDresses.filter(item => item.price[this.currency] <= this.filter.max);
        }

        return filteredDresses;
      },
    },

    methods: {
      updateFilter (filter) {
        this.filter = filter;
      },
    },
  };
</script>
