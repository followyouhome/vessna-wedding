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
    position: relative;
    height: $navigation-bar-height;
    width: 100%;
    top: 0;
    background: $white;
    border-bottom: 1px solid $black;

    @media #{$tablet} {
      display: block;
    }

    .icon-toggle {
      position: absolute;
      top: 0;
      left: 25px;
      bottom: 0;
      margin: auto;
      width: 20px;
      height: 20px;
    }

    .vector-logo {
      display: inline-flex;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 130px;
    }
  }
</style>
