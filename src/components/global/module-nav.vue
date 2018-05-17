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
            <!-- <li class="navigation__secondary-list__item" v-if="!user">
              <div class="navigation__secondary-list__item__link" @click="signup">
                <span class="navigation__secondary-text">Зарегистрироваться</span>
              </div>
            </li> -->
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
    },
  };
</script>

<style lang="scss" scoped>
  $navigationHeight: 66px;
  $navigationMain: 1000;
  $navigationSecondary: $navigationMain + 1;

  .navigation {
    position: sticky;
    height: $navigationHeight;
    top: 0;
    border-bottom: $gray1 solid 1px;
    background-color: $white;
    z-index: $navigationMain;

    @media #{$tablet} {
      height: $navigationHeight * 2 / 3;
    }

    @media #{$phablet} {
      height: auto;
    }

    &:before, &:after {                             //For stickify
      content: '';
      display: table;
    }

    &.navigation--mobile {
      height: 40px;
      text-align: center;

      &:before {
        content: "\e909";
        display: inline-block;
        position: absolute;
        left: 10px;

        font-family: 'icomoon' !important;
        font-size: 20px;
        line-height: 40px;
      }

      &:after {
        content: 'Vessna';
        display: inline-block;

        text-transform: uppercase;
        line-height: 40px;
        font-size: 30px;
      }
    }
  }

  .navigation__main-list {
    margin: 0;
    height: 100%;
    text-align: center;

    .navigation--mobile & {
      position: fixed;
      overflow: auto;
      width: 80%;
      top: 0;

      transition: left .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      @media #{$large} {
        width: 25%;
      }

      @media #{$medium} {
        width: 30%;
      }

      @media #{$tablet} {
        width: 50%;
      }

      @media #{$phablet} {
        width: 70%;
      }
    }

    .navigation--mobile.navigation--swipe-opened & {
      left: 0;
    }

    .navigation--mobile.navigation--swipe-closed & {
      left: -80%;

      @media #{$large} {
        left: -25%;
      }

      @media #{$medium} {
        left: -30%;
      }

      @media #{$tablet} {
        left: -50%;
      }

      @media #{$phablet} {
        left: -70%;
      }
    }
  }

  .navigation__main-list__item {
    display: inline-block;
    position: relative;
    max-width: 20%;
    height: 100%;

    @media #{$phablet} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-width: none;
      min-height: 30px;
      height: auto;
    }

    .navigation--mobile & {
      display: block;
      border-bottom: 1px solid $gray1;
      max-width: none;
      height: auto;
    }
  }

  .navigation__main-list__item__link {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    min-width: 70px;
    padding: 0 13px;

    transition: all 0.1s linear;

    color: $dark;
    text-decoration: none;
    white-space: nowrap;

    @media #{$phablet} {
      min-height: 30px;
      height: 100%;
      width: 100%;
      line-height: $navigationHeight * 2 / 3;
    }

    @media #{$mobile} {
      padding-right: 25px;
    }

    .navigation--mobile & {
      height: auto;
      line-height: $navigationHeight * 2 / 3;
    }

    // &:after {
    //  content: '';
    //  position: absolute;
    //  display: block;
    //  margin: 0;
    //  width: 100%;
    //  left: 0;
    //  top: 0;
    //  height: 0;
    //  box-sizing: border-box;

    //  transition: all 0.1s linear;

    //  @media @phablet {
    //    display: none;
    //  }
    // }

    &:active {
      transform: translateY(2px);
    }

    &:focus {
      outline: none;
      color: $dark;
      text-decoration: none;
    }

    .navigation__main-list__item:hover & {
      background-color: $navigationHoverBackground;
      color: $white;
      text-decoration: none;

      // &:after {
      //  height: 10px;
      //  margin-top: -10px;
      //  background-color: @navigationHoverBackground;
      // }
    }

    .navigation__main-list__item--show-menu & {
      color: $white;
      background: $dark3;
    }

    .navigation--mobile & {
      display: block;

      text-align: left;
      line-height: 40px;
    }
  }

  .navigation__bar {
    display: none;
    position: absolute;
    min-width: 100%;
    right: 0;
    left: 0;
    z-index: $navigationSecondary;

    box-shadow: 0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.06);
    background: $glass2;

    .navigation--mobile & {
      position: static;
    }

    @media #{$phablet} {
      position: static;
    }

    .navigation__main-list__item:hover & {
      display: table;
    }


    .navigation__main-list__item--show-menu & {
      display: block;
      background: $white !important;
    }
  }

  .navigation__secondary-list {
    z-index: $navigationSecondary;

    transition: all 0.1s linear;

    @media #{$tablet} {
      max-width: none;
      float: none;
    }

    .navigation--mobile & {
      position: relative;
      max-width: none;
      float: none;
    }
  }

  .navigation__secondary-list__item {
    display: block;

    @media #{$tablet} {
      display: inline-block;
    }

    .navigation--mobile & {
      display: inline-block;
    }
  }

  .navigation__secondary-list__item__link {
    display: block;
    margin: 5px 10px;
    padding: 5px;
    height: 100%;
    border-radius: 1px;

    text-align: left;
    color: $dark0;

    transition: all 0.1s linear;
    cursor: pointer;
    // color: @white;

    // .vertical_align;

    &:focus {
      outline: none;
      color: $white;
      text-decoration: none;
    }

    &:visited {
      background: $dark2;
      color: $dark5;
    }

    &:hover {
      background: $dark3;
      color: $white;

      text-decoration: none;
    }

    &:active {
      transform: translateY(2px);
    }

    .navigation--mobile & {
      color: $dark5;
    }
  }

  .navigation__promo {
    position: relative;
    float: right;
    width: 40%;
    height: auto;
    overflow: hidden;

    background: $white;
    box-shadow: 0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.06);

    & + .navigation__secondary-list {                     //Dirty hack for navigation sublist
      display: none;
    }

    @media #{$tablet} {
        display: block;
        float: none;
        width: 300px;
        margin: 20px auto;
    }

    @media #{$phablet} {
        width: 90%;
    }

    .navigation--mobile & {
      display: block;
        float: none;
        width: 90%;
        margin: 20px auto;
    }
  }

  .navigation__promo-image-wrapper {
    margin: 0 0 10px;
  }

  .navigation__promo-headline {
    margin: 10px 0;
  }

  .navigation__promo-subheadline {
    margin: 10px 0;
  }
</style>
