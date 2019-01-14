<template>
  <main class="main main--layout-1-1 main--width-limit">
    <form-user-login/>
    <module-article :article="content"/>
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import ModuleArticle from '@/components/module/module-article.vue';
  import FormUserLogin from '@/components/forms/form-user-login.vue';

  import store from '../../../store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/user-login',
      }),
    ]);
  }

  export default {
    name: 'page-user-login',

    extends: Page,

    components: {
      'module-article': ModuleArticle,
      'form-user-login': FormUserLogin,
    },

    asyncData ({ store, route }) {
      return Promise.all([
        this.extends.asyncData({store, route}),
        fetch(store, route),
      ]);
    },

    data () {
      return {

      };
    },

    computed: {
      content () {
        return this.$store.state.page.content;
      },
    },

  };
</script>

<style lang="scss">

</style>
