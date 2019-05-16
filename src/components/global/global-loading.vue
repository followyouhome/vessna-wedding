<template>
  <div class="global-loading">
    <b-spinner class="global-loading__spinner"></b-spinner>
  </div>
</template>

<script>
  export default {
    name: 'GlobalLoading',
  };
</script>

<style lang="scss">
  .global-loading {
    position: fixed;
    height: 100%;
    width: 100%;
    background: $glass;
    z-index: $z-loading;
  }

  .global-loading__spinner {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
