<template>
  <nav class="global-navigation" ref="navigation">
    <global-navigation-mobile-bar @toggle="toggleMenu"/>
    <ul class="global-navigation-main-list" itemscope="" itemtype="https://www.schema.org/SiteNavigationElement">
      <global-navigation-item v-for="item in items"
        :key="item.name"
        :item="item"
      />
      <global-navigation-item
        :item="menu.user"
      >
        <div class="global-navigation-sub-list">
          <global-navigation-item v-if="settings.login && user"
            :item="menu.logout"
          />
          <global-navigation-item v-if="settings.login && !user"
            :item="menu.login"
          />
          <global-navigation-item v-if="settings.registration && !user"
            :item="menu.registration"
          />
          <global-navigation-item v-if="user"
            :item="menu.settings"
          />
          <global-navigation-item v-if="user"
            :item="menu.prices"
          />
          <global-navigation-item v-if="user && user.access && user.access.content"
            :item="menu.content"
          />
        </div>
      </global-navigation-item>
    </ul>
  </nav>
</template>

<script>
  import Stickyfill from 'stickyfill';
  import GlobalNavigationItem from './global-navigation-item.vue';
  import GlobalNavigationMobileBar from './global-navigation-mobile-bar';

  export default {
    name: 'GlobalNavigation',

    props: ['navigation'],

    components: {
      'global-navigation-item': GlobalNavigationItem,
      'global-navigation-mobile-bar': GlobalNavigationMobileBar,
    },

    data () {
      return {
        menu: {
          user: {
            name: 'Для клиентов',
            route: {},
          },
          logout: {
            name: 'Выход',
            route: {
              path: '/user/login',
            },
          },
          login: {
            name: 'Войти в кабинет',
            route: {
              path: '/user/login',
            },
          },
          registration: {
            name: 'Зарегистрироваться',
            route: {
              path: '/user/registartion',
            },
          },
          settings: {
            name: 'Настройки',
            route: {
              path: '/user/settings',
            },
          },
          prices: {
            name: 'Прайсы',
            route: {
              path: 'https://yadi.sk/d/0vDMd0fh3T3bPW',
            },
          },
          content: {
            name: 'Контент',
            route: {
              path: 'https://yadi.sk/d/F8LsI7d13T3bcu',
            },
          },
        },
      };
    },

    computed: {
      items () {
        return this.navigation;
      },

      user () {
        return this.$store.getters.isUserAvailable && this.$store.state.user;
      },

      settings () {
        return this.$store.state.settings || {};
      },
    },

    methods: {
      toggleMenu () {
        this.$refs.navigation.classList.toggle('open');
      },
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        const stickyfill = window.stickyfill || Stickyfill();

        stickyfill.add(this.$refs.navigation);
        window.stickyfill = stickyfill;
      }
    },
  };
</script>

<style lang="scss">
  $navigation-bar-height: 60px;

  .global-navigation {
    position: sticky;
    width: 100%;
    top: 0;
    z-index: $z-navigation;
    border-bottom: 1px solid $gray1;

    &:hover + * {
      opacity: 0.1;
    }

    @media #{$tablet} {
      position: fixed;
      height: $navigation-bar-height;
      left: 0;

      &:hover + * {
        opacity: 1;
      }

      &.open {
        height: 100%;
      }
    }
  }

  .global-navigation-main-list {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: $navigation-bar-height;
    background: $white;

    @media #{$tablet} {
      display: none;
      height: 100%;

      .global-navigation.open & {
        display: block;
      }
    }
  }

  .global-navigation-sub-list {
    display: none;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 100%;
    background: $white;
    border-left: 1px solid $gray1;
    border-right: 1px solid $gray1;
    border-bottom: 1px solid $gray1;

    @media #{$tablet} {
      position: relative;
      right: 0;
    }
  }

  // $navigation-bar-height: 60px;
  //
  // .global-navigation {
  //
  //
  //   &:hover + * {
  //     opacity: 0.2;
  //   }
  //
  //
  // }
  //
  //
  // .global-navigation__main-list {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   flex-direction: row;
  //   height: 60px;
  //   text-align: center;
  // }
  //
  // .global-navigation__main-list__item {
  //   position: relative;
  //   margin: 0 0.5rem;
  //   height: 100%;
  //   list-style: none;
  // }
  //

</style>
