<template>
  <main>
    Registration
  </main>
</template>

<script>
  export default {
    name: 'page-user-registration',

    extends: import('@/components/pages/page.vue'),

    components: {

    },

    data () {
      return {
        seo: {
          name: 'Регистрация',
          description: 'Регистрация для новых пользователей',
        },
      };
    },

  };
</script>

<style lang="scss">

</style>
