<template>
  <main>
    Login
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';

  export default {
    name: 'page-user-login',

    extends: Page,

    components: {

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

</style>
