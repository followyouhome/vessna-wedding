<template>
  <nav class="global-navigation" ref="navigation">
    <ul class="global-navigation__main-list" itemscope="" itemtype="https://www.schema.org/SiteNavigationElement">
      <li class="global-navigation__main-list__item">
          <router-link class="global-navigation__main-list__item__link" to="/">
            <vector-logo/>
          </router-link>
      </li>
      <li class="global-navigation__main-list__item" v-for="item in items">
        <router-link class="global-navigation__main-list__item__link" v-bind:to="item.route">
          <span class="global-navigation__text" itemprop="name">{{ item.label }}</span>
          <span class="global-navigation__icon icon-bars" v-if="item.items"></span>
        </router-link>
        <ul class="global-navigation__secondary-list" v-if="item.items">
          <li class="global-navigation__secondary-list__item" v-for="item in item.items">
            <router-link class="global-navigation__secondary-list__item__link" v-bind:to="item.route">
              <span class="global-navigation__text">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!-- <li class="global-navigation__main-list__item">
        <div class="global-navigation__main-list__item__link">
          <span class="global-navigation__text" itemprop="name">Сотрудничество</span>
          <span class="global-navigation__icon icon-bars"></span>
        </div>
        <ul class="global-navigation__secondary-list">
          <li class="global-navigation__secondary-list__item">
            <div class="global-navigation__secondary-list__item__link">
              <span class="global-navigation__text">Обратная связь</span>
            </div>
          </li>
        </ul>
      </li> -->
      <li class="global-navigation__main-list__item">
        <div class="global-navigation__main-list__item__link">
          <span class="global-navigation__text" itemprop="name">Для клиентов</span>
          <span class="global-navigation__icon icon-bars"></span>
        </div>
        <ul class="global-navigation__secondary-list">
          <li class="global-navigation__secondary-list__item" v-if="settings.login && !user">
            <router-link class="global-navigation__secondary-list__item__link" to="/user/login">
              <span class="global-navigation__text">Войти в кабинет</span>
            </router-link>
          </li>
          <li class="global-navigation__secondary-list__item" v-if="settings.login && user">
            <router-link class="global-navigation__secondary-list__item__link" to="/user/login">
              <span class="global-navigation__text">Выход</span>
            </router-link>
          </li>
          <li class="global-navigation__secondary-list__item" v-if="settings.registration && !user">
            <router-link class="global-navigation__secondary-list__item__link" to="/user/registartion">
              <span class="global-navigation__text">Зарегистрироваться</span>
            </router-link>
          </li>
          <li class="global-navigation__secondary-list__item" v-if="user">
            <router-link class="global-navigation__secondary-list__item__link" to="/user/settings">
              <span class="global-navigation__text">Настройки</span>
            </router-link>
          </li>
          <!-- <li class="global-navigation__secondary-list__item">
            <div class="navigation__secondary-list__item__link">
              <a class="navigation__secondary-text" target="_blank" href="https://yadi.sk/d/0vDMd0fh3T3bPW">Прайсы</a>
            </div>
          </li> -->
          <!-- <li class="global-navigation__secondary-list__item">
            <div class="navigation__secondary-list__item__link">
              <a class="navigation__secondary-text" target="_blank" href="https://yadi.sk/d/F8LsI7d13T3bcu">Контент</a>
            </div>
          </li> -->
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
  import Stickyfill from 'stickyfill';

  export default {
    name: 'GlobalNavigation',

    props: ['navigation'],

    data () {
      return {

      };
    },

    computed: {
      items () {
        return this.navigation;
      },

      user () {
        return this.$store.getters.isUserAvailable;
      },

      settings () {
        return this.$store.state.settings || {};
      },
    },

    methods: {
      signup () {
        this.$store.commit('POPUP_SET', { popup: 'signup' });
      },

      login () {
        this.$store.commit('POPUP_SET', { popup: 'login' });
      },

      logout () {
        this.$store.dispatch('logout');
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
  @keyframes fade {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }

    49% {
      opacity: 0;
      transform: translateY(10px);

    }

    51% {
      opacity: 0;
      transform: translateY(-10px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .global-navigation {
    position: sticky;
    top: 0;
    background: $white;
    z-index: 100000;

    &:hover + * {
      opacity: 0.2;
    }
  }

  .global-navigation__main-list {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    text-align: center;
  }

  .global-navigation__main-list__item {
    position: relative;
    margin: 0 0.5rem;
    height: 100%;
    list-style: none;
  }

  .global-navigation__main-list__item__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    height: 100%;
    color: $dark5;

    .global-navigation__main-list__item:hover & {
      animation: 0.2s fade;
      color: $black;
    }
  }

  .global-navigation__secondary-list {
    display: none;
    position: absolute;
    padding: 16px;
    height: auto;
    width: auto;
    min-width: 100%;
    box-sizing: border-box;
    left: 0;
    top: 100%;
    text-align: center;
    background: $white;
    border-top: 1px solid $gray1;
    z-index: $z-default + 1;

    .global-navigation__main-list__item:hover & {
      display: block;
    }
  }

  .global-navigation__secondary-list__item {
    display: block;
    margin: 0.5rem;
    height: 100%;
    list-style: none;
    text-align: left;
  }

  .global-navigation__secondary-list__item__link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;
    height: 100%;
    color: $dark5;

    &:hover {
      color: $black;
    }
  }

  .global-navigation__text {
    font: 1.2rem/1 $RistrettoProMedium;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: inherit;
    transition: color linear 0.2s;
  }
</style>
