<template>

</template>

<script>
  import store from '../../core/store.js';

  export default {
    name: 'page',

    asyncData ({ store, route }) {
      return Promise.all([
        store.dispatch('fetch', {
          endpoint: 'config',
          namespace: 'config',
          id: 'navigation',
        }),
      ]);
    },
  };
</script>

<style lang="scss">

</style>
