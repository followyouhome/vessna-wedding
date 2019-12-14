<template>
  <div class="global-navigation-bar">
    <div class="global-navigation-bar__container">
      <vector-logo class="global-navigation-bar__logo"/>
    </div>
    <div class="global-navigation-bar__container" @click="toggle">
      <vector-icon class="global-navigation-bar__menu" icon="bars"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GlobalNavigationBar',

    methods: {
      toggle() {
        return this.$emit('toggle');
      },
    },
  }
</script>

<style lang="scss">
  .global-navigation-bar {
    position: fixed;
    display: none;
    height: 54px;
    width: 100%;
    top: 0;
    background: $white;
    border-bottom: 1px solid $gray1;
    z-index: 99999;

    @media #{$tablet} {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .global-navigation-bar__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .global-navigation-bar__logo {
    margin-left: 18px;
  }

  .global-navigation-bar__menu {
    display: flex !important;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 18px;
    cursor: pointer;
    transition: all linear 0.2s;

    &:hover {
      background: $gray1;
    }

    &:active {
      background: $gray2;
    }
  }
</style>

<story group="Global" name="Navigation Bar">
  <global-navigation-bar/>
</story>
