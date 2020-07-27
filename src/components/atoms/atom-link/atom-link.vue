<template>
  <router-link class="atom-link" :to="route">
    <slot/>
  </router-link>
</template>

<script>
  export default {
    name: 'AtomLink',

    props: ['to', 'href'],

    data () {
      let route = null;

      if (this.to) {
        route = this.to;
      } else if (this.href) {
        route = {
          path: this.href,
        };
      }

      if (this.$store.getters.amp) {
        route.query = route.query || {};
        route.query = {
          amp: true,
        };
      }

      return {
        route: route,
      };
    },
  };
</script>

<style lang="scss">
  .atom-link {}
</style>
