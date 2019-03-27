<template>
  <main class="page-contact">
    
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';

  import store from '@/store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/contact',
      }),
    ]);
  }

  export default {
    name: 'PageContact',

    extends: Page,

    components: {

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
        seo: {
          name: 'Вход',
          description: 'Вход для зарегистрированных пользователей',
        },
      };
    },
  };
</script>

<style lang="scss">
  .page-b2b-contact {

  }
</style>
