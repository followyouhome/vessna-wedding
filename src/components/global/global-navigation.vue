<template>
  <nav class="global-navigation">
    <ul class="global-navigation__main-list" itemscope="" itemtype="https://www.schema.org/SiteNavigationElement">
      <li class="global-navigation__main-list__item" v-for="item in items">
        <router-link class="global-navigation__main-list__item__link" v-bind:to="getRoute(item)">
          <span class="global-navigation__text" itemprop="name">{{ item.label }}</span>
          <span class="global-navigation__icon icon-bars" v-if="item.items"></span>
        </router-link>
        <ul class="global-navigation__secondary-list" v-if="item.items">
          <li class="global-navigation__secondary-list__item" v-for="item in item.items">
            <router-link class="global-navigation__secondary-list__item__link" v-bind:to="getRoute(item)">
              <span class="global-navigation__text">{{ item.name }}</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="global-navigation__main-list__item">
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
      </li>
      <li class="global-navigation__main-list__item">
        <div class="global-navigation__main-list__item__link">
          <span class="global-navigation__text" itemprop="name">Для клиентов</span>
          <span class="global-navigation__icon icon-bars"></span>
        </div>
        <!-- <ul class="navigation__secondary-list">
          <li class="navigation__secondary-list__item" v-if="!user">
            <div class="navigation__secondary-list__item__link" @click="login">
              <span class="navigation__secondary-text">Войти, чтобы видеть цены</span>
            </div>
          </li>
          <li class="navigation__secondary-list__item" v-if="!user">
            <div class="navigation__secondary-list__item__link" @click="signup">
              <span class="navigation__secondary-text">Зарегистрироваться</span>
            </div>
          </li>
          <li class="navigation__secondary-list__item" v-if="user">
            <div class="navigation__secondary-list__item__link" @click="logout">
              <span class="navigation__secondary-text">Выход</span>
            </div>
          </li>
          <li class="navigation__secondary-list__item" v-if="user">
            <div class="navigation__secondary-list__item__link">
              <a class="navigation__secondary-text" target="_blank" href="https://yadi.sk/d/0vDMd0fh3T3bPW">Прайсы</a>
            </div>
          </li>
          <li class="navigation__secondary-list__item" v-if="available">
            <div class="navigation__secondary-list__item__link">
              <a class="navigation__secondary-text" target="_blank" href="https://yadi.sk/d/F8LsI7d13T3bcu">Контент</a>
            </div>
          </li>
        </ul> -->
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'GlobalNavigation',

    props: ['navigation'],

    computed: {
      items () {
        return this.navigation;
      },

      user () {
        return this.$store.state.global && this.$store.state.global.user && this.$store.state.global.user._id;
      },

      authorized () {
        return this.$store.state.global.user && this.$store.state.global.user._id;
      },

      available () {
        return this.$store.state.global.user && this.$store.state.global.user.canAccessContent;
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

      getRoute (item) {
        return {
          path: item.path || null,
          name: item.route || null,
          params: item.params || null,
        };
      },
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
    position: relative;
    background: $white;
  }

  .global-navigation__main-list {
    height: 60px;
    text-align: center;
  }

  .global-navigation__main-list__item {
    display: inline-block;
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
    height: 60px;
    width: 100%;
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
    display: inline-block;
    margin: 0 0.5rem;
    height: 100%;
    list-style: none;
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
