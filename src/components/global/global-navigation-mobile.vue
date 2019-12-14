<template>
  <nav class="global-navigation-mobile nav">
    <div class="nav__section nav__section--top">
      <div class="nav__item" v-if="parent && parent.name">
        <vector-icon class="nav__item-icon" icon="angle-left"/>
        <div class="nav__item-link" @click="navigate(parent)">{{parent.name}}</div>
      </div>
      <div class="nav__item-logo" v-else>
        <vector-logo/>
      </div>
    </div>
    <div class="nav__section nav__section--menu">
      <div class="nav__group">
        <span class="nav__group-title">{{active.name}}</span>
      </div>
      <template v-for="item in active.items">
        <template v-if="item.items">
          <div class="nav__item" @click="navigate(item)">
            <span class="nav__item-link">{{item.name}}</span>
            <vector-icon class="nav__item-icon" icon="angle-right"/>
          </div>
        </template>
        <template v-else>
          <router-link class="nav__item" :to="item.route">
            <span class="nav__item-link">{{item.name}}</span>
          </router-link>
        </template>
      </template>
    </div>
    <div class="nav__section nav__section--bottom">
      <simple-button type="secondary" outlined block>Вход</simple-button>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'global-navigation',

    props: ['navigation'],

    data() {
      return {
        active: {
          name: 'Меню',
          items: this.navigation
        },
        parent: null,
      };
    },



    methods: {
      navigate(item) {
        this.parent = this.active;
        this.active = item;
      }
    }
  }
</script>

<style lang="scss">
  .nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;

    width: 90%;
    height: 100%;
    background: white;

    transform: translateX(100%);
  }

  .nav__section {
    width: 100%;
    border-bottom: 1px solid #c5c5c5;

    &:last-child {
      border-bottom: none;
    }

    &--top {
      height: 54px;
    }

    &--menu {
      flex: 1;
      padding: 0 15px 0 27px;
    }

    &--bottom {
      padding: 12px 24px;
    }
  }

  .nav__group {
    margin: 10px 0;
    padding: 5px;
  }

  .nav__group-title {
    font: 1rem/1 $ApercuBespoke;
    font-weight: bold;
    letter-spacing: 2px;
    color: $black;
    text-transform: uppercase;
  }

  .nav__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 5px;
    // background: grey;
  }

  .nav__item-link {
    display: inline-block;
    padding: 5px 0;
    font: 1rem/1 $ApercuBespoke;
    letter-spacing: 2px;
    color: $black;
    // text-transform: uppercase;
  }

  .nav__item-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .nav__item-icon {

  }
</style>

<story group="Global" name="Navigation1">
  <global-navigation
    :navigation="{
      name: 'Меню',
      items: [{
        'name': 'Главная страница',
        'route': {
          'name': 'page-homepage',
        },
      }, {
        'name': 'Новости',
        'route': {
          'name': 'page-news-hub',
        },
      }, {
        'name': 'Свадебные платья',
        'route': {
          'path': '/wedding-dresses',
        },
        items: [{
          'name': 'Sun Flare',
          'route': {
            'name': 'page-dress-collection-wedding',
            'params': {
              'slug': 'sun-flare',
            },
          },
        }],
      }]
    }"
  />
</story>
