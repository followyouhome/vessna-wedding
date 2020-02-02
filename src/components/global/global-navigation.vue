<template>
  <nav class="navigation" ref="navigation" @click="navigationClick">
    <ul class="navigation__main-list" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
      <li class="navigation__main-list__item" v-for="item in navigation">
        <router-link class="navigation__main-list__item__link" :to="item.route" itemprop="url" @click.native="itemClick" :event="mobile && item.items ? '' : 'click'">
          <span class="navigation__main-text" itemprop="name">{{item.name}}</span>
          <span class="navigation__icon icon-bars"></span>
        </router-link>
        <div class="navigation__bar" v-if="item.items">
          <ul class="navigation__secondary-list">
            <li class="navigation__secondary-list__item">
              <router-link class="navigation__secondary-list__item__link" :to="item.route" @click.native="subitemClick" itemprop="url">
                <span class="navigation__secondary-text">Перейти</span>
              </router-link>
            </li>
            <li class="navigation__secondary-list__item" v-for="subitem in item.items">
              <router-link class="navigation__secondary-list__item__link" :to="subitem.route" @click.native="subitemClick" itemprop="url">
                <span class="navigation__secondary-text">{{subitem.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="navigation__main-list__item">
        <router-link class="navigation__main-list__item__link" to="#" itemprop="url" @click.native="itemClick" :event="mobile ? '' : 'click'">
          <span class="navigation__main-text" itemprop="name">Для клиентов</span>
          <span class="navigation__icon icon-bars"></span>
        </router-link>
        <div class="navigation__bar">
          <ul class="navigation__secondary-list">
            <li class="navigation__secondary-list__item">
              <router-link class="navigation__secondary-list__item__link" to="/partnership" @click.native="subitemClick" itemprop="url">
                <span class="navigation__secondary-text">Условия сотрудничества</span>
              </router-link>
            </li>
            <li class="navigation__secondary-list__item">
              <router-link class="navigation__secondary-list__item__link" to="/contact" @click.native="subitemClick" itemprop="url">
                <span class="navigation__secondary-text">Контактная информация</span>
              </router-link>
            </li>
            <li class="navigation__secondary-list__item">
              <router-link class="navigation__secondary-list__item__link" to="/user/login" @click.native="subitemClick" itemprop="url" v-if="settings.login">
                <span class="navigation__secondary-text">Войти в кабинет</span>
              </router-link>
            </li>
            <li class="navigation__secondary-list__item">
              <router-link class="navigation__secondary-list__item__link" to="/user/registartion" @click.native="subitemClick" itemprop="url" v-if="settings.registration">
                <span class="navigation__secondary-text">Зарегистрироваться</span>
              </router-link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
</nav>
</template>

<script>
  import Stickyfill from 'stickyfill';
  import isMobile from 'ismobilejs';

  export default {
    name: 'GlobalNavigation',

    props: ['navigation', 'settings'],

    computed: {
      mobile() {
        return !!isMobile.any;
      }
    },

    methods: {
      navigationClick(e) {
        const navigation = this.$refs.navigation;

        if (e.target == navigation) {
          this.hideSubmenu();

          navigation.classList.toggle('navigation--swipe-opened');
          navigation.classList.toggle('navigation--swipe-closed');

          document.body.classList.toggle('body--swipe-opened');
          document.body.classList.toggle('body--swipe-closed');

          Array.from(document.querySelectorAll('.promo, .module, header, footer')).forEach(function (item) {
            item.addEventListener('click', function (e) {
              navigation.classList.remove('navigation--swipe-opened');
              navigation.classList.add('navigation--swipe-closed');

              document.body.classList.remove('body--swipe-opened');
              document.body.classList.add('body--swipe-closed');
            });
          });
        }
      },

      itemClick(e) {
        const navigation = this.$refs.navigation;

        if (e.currentTarget.nextElementSibling) {
          e.preventDefault();
          e.stopPropagation();

          this.hideSubmenu();

          e.currentTarget.parentNode.classList.add('navigation__main-list__item--show-menu');

          return false;
        }
      },

      subitemClick() {
        setTimeout(() => {
          this.hideSubmenu();
          this.closeMenu();
        }, 500)
      },

      hideSubmenu() {
        Array.from(this.$refs.navigation.querySelectorAll('.navigation__main-list__item--show-menu')).forEach(item => {
          item.classList.remove('navigation__main-list__item--show-menu');
        })
      },

      closeMenu() {
        const navigation = this.$refs.navigation;

        navigation.classList.remove('navigation--swipe-opened');
        navigation.classList.add('navigation--swipe-closed');

        document.body.classList.remove('body--swipe-opened');
        document.body.classList.add('body--swipe-closed');
      }
    },

    mounted() {
      if (__VUE_ENV__ === 'client') {
        Stickyfill().add(this.$refs.navigation);

        this.$router.beforeEach((to, from, next) => {
          this.subitemClick();
          return next();
        })
      }



      let navigation = document.querySelector('.navigation'),
      	items = Array.from(document.querySelectorAll('.navigation__main-list__item__link')),
      	body = document.body;

      if (navigation && isMobile.any) {
      	body.classList.add('body--swipe-closed');
      	navigation.classList.add('navigation--mobile');
      	navigation.classList.add('navigation--swipe-closed');
      }
    }
  }
</script>

<style lang="scss">
.navigation {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 66px;
  background-color: $white;
  border-bottom: $gray1 solid 1px;

  @media #{$tablet} {
    height: 66px * 2 / 3;
  }

  @media #{$phablet} {
    height: auto;
  }

  &:before, &:after {															// For stickify
    display: table;
    content: '';
    cursor: pointer;
  }

  &.navigation--mobile {
    height: 40px;
    text-align: center;

    &:before {
      position: absolute;
      left: 10px;
      display: inline-block;
      font-size: 20px;
      font-family: 'icomoon' !important;
      line-height: 40px;
      content: "\e909";
    }

    &:after {
      content: 'Vessna';
      display: inline-block;
      font-family: $PeginotLight;
      font-size: 30px;
      line-height: 40px;
      text-transform: uppercase;
      transform: scaleY(0.9);
    }
  }
}

.navigation__main-list {
  height: 100%;
  margin: 0;
  text-align: center;

  .navigation--mobile & {
    position: fixed;
    padding: 0;
    top: 0;
    width: 80%;
    overflow: auto;
    background: $gray1;
    box-shadow: -1px 0px 1px $dark5 inset;
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
position: static;
display: inline-block;
max-width: 20%;
height: 100%;

@media #{$phablet} {
  max-width: none;
  height: auto;
}

.navigation--mobile & {
  display: block;
  max-width: none;
  height: auto;
  border-bottom: 1px solid $gray1;
}
}

.navigation__main-list__item__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  height: 100%;
  padding: 0 13px;
  color: $dark;
  white-space: nowrap;
  text-decoration: none;
  transition: all 0.1s linear;


  @media #{$phablet} {
    height: auto;
    line-height: 60px * 2 / 3;
  }

  @media #{$mobile} {
    padding-right: 25px;
  }

  .navigation--mobile & {
    height: auto;
    line-height: 60px * 2 / 3;
  }

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height:	0;
    margin: 0;
    transition: all 0.1s linear;
    content: '';

    @media #{$phablet} {
      display: none;
    }
  }

  &:active {
    transform: translateY(2px);
  }

  &:focus {
    color: $dark;
    text-decoration: none;
    outline: none;
  }

  .navigation__main-list__item:hover & {
    color: $white;
    text-decoration: none;
    background-color: $dark;

    &:after {
      height: 10px;
      margin-top: -10px;
      background-color: $dark;
    }
  }

  .navigation__main-list__item--show-menu & {
    color: $white;
    background: $dark3;
  }

  .navigation--mobile & {
    display: block;
    line-height: 40px;
    text-align: left;
  }
}

.navigation__bar {
  position: absolute;
  right: 0;
  left: 0;
  z-index: 1001;
  display: none;
  padding: 10px 450px;
  background: $white;
  box-shadow: 0 1px 3px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.06);


  .navigation--mobile & {
    position: static;
  }

  .navigation:not(.navigation--mobile) .navigation__main-list__item:hover & {
    display: block;
  }

  .navigation__main-list__item--show-menu & {
    display: block;
    background: $white !important;
  }

  .navigation__secondary-list__item__link {
    color: $black;
  }

  @media #{$x2large} {
    padding: 10px 300px;
  }

  @media #{$xlarge} {
    padding: 10px 250px;
  }

  @media #{$large} {
    padding: 10px 150px;
  }

  @media #{$medium} {
    padding: 10px 150px;
  }

  @media #{$tablet} {
    padding: 10px 100px;
  }

  @media #{$phablet} {
    padding: 10px;
  }
}

.navigation__secondary-list {
  z-index: 1001;
  float: left;
  max-width: 25%;
  overflow: hidden;
  text-align: left;
  transition: all 0.1s linear;

  @media #{$tablet} {
    float: none;
    max-width: none;
  }

  .navigation--mobile & {
    padding: 0;
    position: relative;
    float: none;
    max-width: none;
  }
}

.navigation__secondary-list__item {
  display: block;

  @media #{$tablet} {
    display: inline-block;
  }

  .navigation--mobile & {
    display: block;
  }
}

.navigation__secondary-list__item__link {
  display: block;
  height: 100%;
  margin: 5px 10px;
  padding: 5px;
  color: $white;
  text-align: left;
  border-radius: 1px;
  transition: all 0.1s linear;


  &:focus {
    color: $white;
    text-decoration: none;
    outline: none;
  }

  &:visited {
    color: $dark5;
    background: $dark2;
  }

  &:hover {
    color: $white;
    text-decoration: none;
    background: $dark3;
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

& + .navigation__secondary-list {											// Dirty hack for navigation sublist
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

.navigation__main-text {
	display: inline-block;
	color: inherit;
	font: 20px/1em $RistrettoProMedium;
	white-space: normal;
	text-transform: uppercase;
	text-decoration: none;
	vertical-align: middle;
  letter-spacing: 2px;
}

.navigation__secondary-text {
	color: inherit;
	font: 20px/1em $RistrettoProLight;
	letter-spacing: 2px;
	text-transform: uppercase;
	text-decoration: none;
	vertical-align: middle;
}

.navigation__icon {
	display: inline-block;
	margin-top: 2px;
	margin-left: 4px;
	font-size: 10px;
	line-height: 1.5em;
	vertical-align: middle;
}


</style>
