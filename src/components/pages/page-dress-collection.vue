<template>
    <module-grid-dress v-bind:collection="collection"></module-grid-dress>
</template>

<script>
  import ModuleDressCollection from '../module/module-grid-dress.vue';

  export default {
    name: 'page-dress-collection',

    components: {
      'module-grid-dress': ModuleDressCollection,
    },

    state : {
      collection: null
    },

    asyncData ({ store, route }) {
      return Promise.all([
        store.dispatch('fetch', {
          endpoint: 'config',
          namespace: 'config',
          id: 'navigation'
        }),

        store.dispatch('fetch', {
          endpoint: 'dress-collection',
          id: route.params.collection
        })
      ])
    },

    beforeRouteUpdate (to, from, next) {
      this.$store.dispatch('fetch', {
        endpoint: 'dress-collection',
        id: to.params.collection
      }).then(() => {
        next();
      })
    },

    computed: {
      collection () {
        return this.$store.state['dress-collection'][this.$route.params.collection];
      }
    }
  }
</script>
