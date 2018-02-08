<template>
  <nav class="navigation">
    <ul class="navigation__main-list" itemscope="" itemtype="https://www.schema.org/SiteNavigationElement">
      <li class="navigation__main-list__item" v-for="item in items">
        <router-link class="navigation__main-list__item__link" v-bind:to="{ name: item.route || null, path: item.path || null }">
          <span class="navigation__main-text" itemprop="name">{{ item.label }}</span>
          <span class="navigation__icon icon-bars" v-if="item.items"></span>
        </router-link>
        <div class="navigation__bar" v-if="item.items">
          <ul class="navigation__secondary-list">
            <li class="navigation__secondary-list__item" v-for="item in item.items">
              <router-link class="navigation__secondary-list__item__link" v-bind:to="{ name: item.route || null, path: item.path || null, params: item.params || null }">
                <span class="navigation__secondary-text">{{ item.name }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation__main-list__item">
        <div class="navigation__main-list__item__link">
          <span class="navigation__main-text" itemprop="name">Для клиентов</span>
          <span class="navigation__icon icon-bars"></span>
        </div>
        <div class="navigation__bar">
          <ul class="navigation__secondary-list">
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
                <span class="navigation__secondary-text">Прайсы</span>
              </div>
            </li>
            <li class="navigation__secondary-list__item" v-if="user">
              <div class="navigation__secondary-list__item__link">
                <span class="navigation__secondary-text">Контент</span>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'module-nav',

    computed: {
      items () {
        return this.$store.state.config.navigation;
      },

      user () {
        return this.$store.state.global && this.$store.state.global.user && this.$store.state.global.user._id != '';
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
  };
</script>

<style lang="scss">

</style>
