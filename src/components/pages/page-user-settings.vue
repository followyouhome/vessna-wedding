<template>
  <main>
    <form-user-settings/>
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import FormUserSettings from '@/components/forms/form-user-settings.vue';

  export default {
    name: 'page-user-registration',

    extends: Page,

    components: {
      'form-user-settings': FormUserSettings,
    },

    data () {
      return {
        seo: {
          name: 'Настройки',
          description: 'Настройки текущего пользователя',
        },
      };
    },

  };
</script>

<style lang="scss">

</style>
