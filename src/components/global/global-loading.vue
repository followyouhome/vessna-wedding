<template>
  <div class="global-loading">
    <atom-spinner class="global-loading__spinner"/>
  </div>
</template>

<script>
  import { AtomSpinner } from '@/components/atoms';

  export default {
    name: 'GlobalLoading',

    components: {
      AtomSpinner,
    },
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
