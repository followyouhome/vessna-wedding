<template>
  <main class="page-b2b-contact">
    B2B Contact
    <form-contact-us/>
  </main>
</template>

<script>
  import FormContactUs from '@/components/forms/form-contact-us';
  
  export default {
    name: 'PageB2BContact',

    components: {
      'form-contact-us': FormContactUs,
    },

    data () {
      return {

      };
    },
  };
</script>

<style lang="scss">
  .page-b2b-contact {

  }
</style>
