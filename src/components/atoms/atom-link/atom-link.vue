<template>
  <router-link :to="route">
    <slot/>
  </router-link>
</template>

<script>
  export default {
    name: 'AtomLink',

    props: ['to'],

    data () {
      this.to.query = this.to.query || {};

      if (this.$store.getters.amp) {
        this.to.query = {
          amp: true,
        };
      }

      return {
        route: this.to,
      };
    },
  };
</script>
