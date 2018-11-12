<template>
  <section class="module-b2b-info">
    <aside class="module-b2b-info__aside">
      123
    </aside>
    <article class="module-b2b-info__article">
      546
    </article>
  </section>
</template>

<script>
  export default {
    name: 'ModuleB2BInfo',

    props: ['info'],

    data () {
      return {

      };
    },


  };
</script>

<style lang="scss">
  .module-b2b-info {
    display: flex;
  }

  .module-b2b-info__aside {
    position: sticky;
    width: 360px;

    border: 1px solid $gray2;
  }

  .module-b2b-info__article {

  }
</style>
