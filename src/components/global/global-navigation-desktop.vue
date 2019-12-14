<template>
  <nav class="global-navigation" ref="navigation">
    <ul class="global-navigation-main-list" itemscope="" itemtype="https://www.schema.org/SiteNavigationElement">
      <global-navigation-item v-for="item in items"
        :key="item.name"
        :item="item"
        @click="click"
      />
      <global-navigation-item
        :item="menu.user"
        @click="click"
      >
        <div class="global-navigation-sub-list">
          <b-container class="global-navigation-sub-list-wrapper">
            <div class="global-navigation-sub-list__list">
              <global-navigation-item
                :item="menu.partnership"
                @click="click"
              />
              <global-navigation-item
                :item="menu.contact"
                @click="click"
              />
              <hr class="global-navigation-line"/>
              <global-navigation-item v-if="settings.login && user"
                :item="menu.logout"
                @click="click"
              />
              <global-navigation-item v-if="settings.login && !user"
                :item="menu.login"
                @click="click"
              />
              <global-navigation-item v-if="settings.registration && !user"
                :item="menu.registration"
                @click="click"
              />
              <global-navigation-item v-if="user"
                :item="menu.settings"
                @click="click"
              />
              <global-navigation-item v-if="user"
                :item="menu.prices"
                @click="click"
              />
              <global-navigation-item v-if="user && user.access && user.access.content"
                :item="menu.content"
                @click="click"
              />
            </div>
            <div class="global-navigation-sub-list__promo">
              <!-- 123 -->
            </div>
          </b-container>
        </div>
      </global-navigation-item>
    </ul>
  </nav>
</template>

<script>
  import Stickyfill from 'stickyfill';
  import GlobalNavigationItem from './global-navigation-item.vue';

  export default {
    name: 'GlobalNavigation',

    props: ['navigation'],

    components: {
      'global-navigation-item': GlobalNavigationItem,
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
          contact: {
            name: 'Контактная информация',
            route: {
              path: '/contact',
            },
          },
          partnership: {
            name: 'Условия сотрудничества',
            route: {
              path: '/partnership',
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
      click () {
        // this.toggleMenu();
      },

      toggleMenu () {
        // window.document.body.classList.toggle('open');
        // this.$refs.navigation.classList.toggle('open');
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
  body.open {
    overflow: hidden;
  }

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
      display: none;
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
    flex-direction: row;
    position: absolute;
    padding: 20px 0;
    width: 100%;
    min-height: 320px;
    left: 0;
    top: 100%;
    background: $white;
    border-left: 1px solid $gray1;
    border-right: 1px solid $gray1;
    border-bottom: 1px solid $gray1;
    box-shadow: 0px 0px 10px 0px #e6e6e6;

    @media #{$tablet} {
      display: block;
      position: relative;
      right: 0;
    }

    .global-navigation-item {
      height: 40px;
    }
  }

  .global-navigation-line {
    width: 100%;
    height: 1px;
    border: none;
    background: $black;
  }

  .global-navigation-sub-list-wrapper {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }

  .global-navigation-sub-list__list {
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-direction: column;
  }

  .global-navigation-sub-list__promo {
    display: flex;
    align-items: center;
    justify-content: center;

    @media #{$tablet} {
      display: none;
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
