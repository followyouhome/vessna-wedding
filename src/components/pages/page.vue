<template>

</template>

<script>
  import Vue from 'vue';
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

    mounted () {
      if (__VUE_ENV__ === 'client') {
        if (Vue.cookie.get('uid') && Vue.cookie.get('uid') !== this.$store.state.global.user._id) {
          this.$store.state.global.user._id = Vue.cookie.get('uid');
          this.$store.state.global.user.canAccessKeystone = Vue.cookie.get('canAccessKeystone') === 'true';
          this.$store.state.global.user.canAccessContent = Vue.cookie.get('canAccessContent') === 'true';
        }
      }
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
