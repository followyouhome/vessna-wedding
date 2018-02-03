<!--
  items: [{
    label: '',
    route: '',
    items: [{
      label: ''
      route: ''
    }]
  }]
-->

<template>
  <nav class="navigation">
    <ul class="navigation__main-list" itemscope="" itemtype="http://www.schema.org/SiteNavigationElement">
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
        <div class="navigation__main-list__item__link" @click="show">
          <span class="navigation__main-text" itemprop="name">Войти</span>
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
    },

    methods: {
      show() {
        this.$store.commit('POPUP_SET', { popup: 'login' });
      },
    },
  };
</script>

<style lang="scss">

</style>
