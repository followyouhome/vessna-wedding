<template>
  <main class="page-error">
    <h1 class="page-error__headline">Страница не найдена</h1>
  </main>
</template>

<script>
  import Page from './page.vue';

  import store from '../../store/';

  export default {
    name: 'PageError',

    extends: Page,

    components: {

    },

    asyncData ({ store, route }) {
      return Promise.all([
        this.extends.asyncData({store, route}),
      ]);
    },

    beforeRouteEnter (to, from, next) {
      __VUE_ENV__ === 'server' ? next() : fetch(store, to).then(() => next());
    },

    beforeRouteUpdate (to, from, next) {
      __VUE_ENV__ === 'server' ? next() : fetch(store, to).then(() => next());
    },

    computed: {

    },
  };
</script>

<style lang="scss">
  .page-error {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page-error__headline {
		letter-spacing: 0;
		text-align: center;
		font: 3rem/1 $RistrettoProLight;
		color: $black;
  }
</style>
