<template>
  <main class="page-about">
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import store from '@/store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/empty',
      }),
    ]);
  }

  export default {
    name: 'PageB2BInfo',

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
        info: [{
          title: 'Оплата',
          content: `Возможна оплата по безналичному рассчету`,
        }, {
          title: 'Доставка',
          content: `Бесплатная доставка по России`,
        }],
      };
    },
  };
</script>

<style lang="scss">
  .page-b2b-info {
    background: $white;
  }
</style>
