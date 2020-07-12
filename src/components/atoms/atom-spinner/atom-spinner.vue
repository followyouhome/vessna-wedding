<template>
  <span class="atom-spinner"></span>
</template>

<script>
  export default {
    name: 'AtomSpinner',
  };
</script>

<style lang="scss">
  @keyframes spinner-border {
      to {
          transform: rotate(1turn)
      }
  }

  .atom-spinner {
    display:inline-block;
    height:32px;
    width:32px;
    box-sizing:border-box;
    animation: 0.75s linear 0s spinner-border infinite;
    border-radius: 50%;
    border: 4px solid $dark;
    border-right-color: transparent;
  }
</style>
