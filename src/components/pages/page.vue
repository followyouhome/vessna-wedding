<template>

</template>

<script>
  export default {
    name: 'page',

    asyncData ({ store, route }) {
      return Promise.all([
        store.dispatch('fetch', {
          endpoint: 'config',
          namespace: 'config',
          id: 'navigation'
        })
      ])
    },
  }
</script>

<style lang="scss">

</style>
