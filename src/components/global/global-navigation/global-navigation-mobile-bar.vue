<template>
  <div class="global-navigation-mobile-bar">
    <icon-toggle icon="hamburger" handle="click" @click="toggleMenu"/>
    <vector-logo/>
  </div>
</template>

<script>
  export default {
    name: 'GlobalNavigationMobileBar',

    methods: {
      toggleMenu () {
        this.$emit('toggle');
      },
    },
  };
</script>

<style lang="scss">
  $navigation-bar-height: 60px;

  .global-navigation-mobile-bar {
    display: none;
    height: $navigation-bar-height;
    width: 100%;
    top: 0;
    background: $white;
    border-bottom: 1px solid $black;

    @media #{$tablet} {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-toggle {
      margin: 0;
      width: 20px;
      height: 20px;
    }

    .vector-logo {
      display: inline-flex;
      width: 100px;
    }
  }
</style>
