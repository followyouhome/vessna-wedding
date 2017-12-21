<template>
    <module-dress-grid v-bind:collection="collection"></module-dress-grid>
</template>

<script>
  import ModuleDressCollection from '../module/module-dress-grid.vue';

  export default {
    name: 'page-dress-collection',

    components: {
      'module-dress-grid': ModuleDressCollection,
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

    beforeCreate() {
      console.log("beforeCreate")
    },

    created() {
      console.log("created")
    },

    beforeMount() {
      console.log("beforeMount")
    },

    mounted() {
      console.log("mounted")
    },

    beforeUpdate() {
      console.log("beforeUpdate")
    },

    updated() {
      console.log("updated")
    },


   
    computed: {
      collection () {
        return this.$store.state['dress-collection'][this.$route.params.collection];
      }
    }
  }
</script>
