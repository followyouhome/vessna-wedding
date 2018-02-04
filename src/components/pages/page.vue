<template>

</template>

<script>
  import store from '../../core/store/';

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
  .promo {
    z-index: $z-default;
    position: relative;
  }
  .module {
    z-index: $z-default;
    position: relative;
    background: white;
  }
</style>
