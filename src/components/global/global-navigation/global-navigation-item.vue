<template>
  <div class="global-navigation-item">
    <router-link class="global-navigation-link" v-bind:to="item.route">
      <span class="global-navigation-text" itemprop="name">{{ item.name }}</span>
      <icon-toggle class="global-navigation-icon" icon="hamburger" handle="click" @click="toggleMenu" v-if="item.items"/>
    </router-link>
    <slot>
      <div class="global-navigation-sub-list" v-if="item.items && item.items.length">
        <global-navigation-item v-for="item in item.items"
          :key="item.name"
          :item="item"
        />
      </div>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'GlobalNavigationItem',

    props: ['item'],
  };
</script>

<style lang="scss">
  $height-desktop: 60px;
  $height-mobile: 80px;

  @include animation-scroll();

  .global-navigation-item {
    display: inline-flex;
    position: relative;
    height: $height-desktop;
    padding: 0 20px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    &:hover {
      .global-navigation-sub-list {
        display: flex;
      }

      .global-navigation-text {
        color: $black;
        animation: animation-scroll .3s;
      }

      .global-navigation-icon {
        animation: animation-scroll .3s;

        .inner {
          &, &:before, &:after {
            background: $black !important;
          }
        }
      }

      .global-navigation-sub-list .global-navigation-text {
        animation: none;
      }
    }

    @media #{$tablet} {
      display: flex;
      justify-content: left;
      padding: 15px 20px;
      height: $height-mobile;
      border-bottom: 1px solid $gray1;

      &:first-child {
        border-top: 1px solid $gray1;
      }
    }
  }

  .global-navigation-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: inherit;

    @media #{$tablet} {
      width: 100%;
    }
  }

  .global-navigation-text {
    display: inline-block;
    margin-top: 7px;
    font: 1.3rem/1 $RistrettoProMedium;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: $dark5;
    transition: color linear 0.3s;

    @media #{$tablet} {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  .global-navigation-icon {
    position: relative;
    margin-left: 7px;
    margin-top: 5px;
    height: 20px;
    width: 20px;

    .inner {
      &, &:before, &:after {
        background: $dark5 !important;
      }
    }
  }
</style>
