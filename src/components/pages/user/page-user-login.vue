<template>
  <main>
    <form-user-login/>
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import FormUserLogin from '@/components/forms/form-user-login.vue';

  export default {
    name: 'page-user-login',

    extends: Page,

    components: {
      'form-user-login': FormUserLogin,
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
