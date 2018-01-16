<template>
    <module-grid-dress v-bind:collection="collection"></module-grid-dress>
</template>

<script>
  import Page from './page.vue';
  import ModuleDressCollection from '../module/module-grid-dress.vue';

  import store from '../../core/store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        endpoint: 'dress-collection',
        id: route.params.collection,
      }),
    ]);
  }

  export default {
    name: 'page-dress-collection',

    extends: Page,

    components: {
      'module-grid-dress': ModuleDressCollection,
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
      collection () {
        return this.$store.state['dress-collection'][this.$route.params.collection];
      },
    },
  };
</script>
