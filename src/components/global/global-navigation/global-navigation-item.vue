<template>
  <div class="global-navigation-item">
    <a class="global-navigation-link" :href="item.route.path" target="_blank" v-if="item.route.path && item.route.path.match('//')">
      <span class="global-navigation-text" itemprop="name">{{ item.name }}</span>
      <icon-toggle class="global-navigation-icon" icon="hamburger" handle="click" v-if="item.items"/>
    </a>
    <router-link class="global-navigation-link" v-bind:to="item.route" v-else>
      <span class="global-navigation-text" itemprop="name">{{ item.name }}</span>
      <icon-toggle class="global-navigation-icon" icon="hamburger" handle="click" v-if="item.items"/>
    </router-link>
    <slot>
      <div class="global-navigation-sub-list" v-if="item.items && item.items.length">
        <b-container class="global-navigation-sub-list-wrapper">
          <div class="global-navigation-sub-list__list">
            <global-navigation-item v-for="item in item.items"
              :key="item.name"
              :item="item"
            />
            <div class="global-navigation-sub-list__promo">
              123
            </div>
          </div>
        </b-container>
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
    position: static;
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
      display: block;
      position: static;
      justify-content: left;
      padding: 15px 20px;
      height: auto;
      border-bottom: 1px solid $gray1;

      &:first-child {
        border-top: 1px solid $gray1;
      }

      .global-navigation-sub-list {
        position: static;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
      }
    }
  }

  .global-navigation-sub-list-wrapper {
    display: flex;
    flex-direction: row;
    align-items: baseline;
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
    font: 23px/1 $RistrettoProMedium;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: $dark5;
    white-space: nowrap;
    transition: color linear 0.3s;

    @media #{$tablet} {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  .global-navigation-icon {
    display: inline-block;
    position: relative;
    margin-left: 10px !important;
    margin-top: 5px;
    height: 20px;
    width: 20px !important;
    top: 2px;

    .inner {
      &, &:before, &:after {
        background: $dark5 !important;
      }
    }
  }
</style>
