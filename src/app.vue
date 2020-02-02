<template>
  <div id="app" class="app" ref="app">
    <global-loading v-if="loading"/>
    <global-announcement :announcement="settings.announcement" v-if="settings.announcement"/>
    <global-main-promo :promo="main_promo" v-if="main_promo"/>
    <global-navigation :navigation="navigation" :settings="settings"/>
    <transition name="fade">
      <router-view class="global-router-view" @loading="onLoading" @loaded="onLoaded"></router-view>
    </transition>
    <global-footer/>
    <global-popup-container :popup="popup" v-show="popup"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import NoSSR from 'vue-no-ssr';
  import GlobalFooter from '@/components/global/global-footer.vue';
  import GlobalLoading from '@/components/global/global-loading.vue';
  import GlobalMainPromo from '@/components/global/global-main-promo.vue';
  import GlobalNavigation from '@/components/global/global-navigation.vue';
  import GlobalAnnouncement from '@/components/global/global-announcement.vue';
  import GlobalPopupContainer from '@/components/global/global-popup-container';
  import CaptchaGoogle from '@/components/atoms/captcha-google.vue';
  import ImageDeferred from '@/components/atoms/image-deferred.vue';
  import SimpleButton from '@/components/atoms/simple-button';
  import VideoRegular from '@/components/atoms/video-regular.vue';
  import VectorIcon from '@/components/atoms/vector-icon.vue';
  import VectorLogo from '@/components/atoms/vector-logo.vue';
  import IconToggle from '@/components/atoms/icon-toggle.vue';

  const yandex = process.env.YANDEX_METRIKA_ID;

  import {
    TRACK_SET_YANDEX,
  } from '@/store/mutation-types';

  import { COOKIES } from '@/../config/constants.js';

  Vue.component('no-ssr', NoSSR);
  Vue.component('captcha-google', CaptchaGoogle);
  Vue.component('image-deferred', ImageDeferred);
  Vue.component('video-regular', VideoRegular);
  Vue.component('simple-button', SimpleButton);
  Vue.component('vector-icon', VectorIcon);
  Vue.component('vector-logo', VectorLogo);
  Vue.component('icon-toggle', IconToggle);

  export default {
    name: 'App',

    components: {
      'global-footer': GlobalFooter,
      'global-loading': GlobalLoading,
      'global-main-promo': GlobalMainPromo,
      'global-announcement': GlobalAnnouncement,
      'global-popup-container': GlobalPopupContainer,
      'global-navigation': GlobalNavigation,
    },

    asyncData ({ store, route }) {
      return Promise.all([
        store.dispatch('fetch', {
          namespace: 'user',
          endpoint: 'user',
        }),

        store.dispatch('fetch', {
          namespace: 'settings',
          endpoint: 'settings',
          params: {
            turbo: !!route.query.turbo,
            amp: !!route.query.amp,
          },
        }),

        store.dispatch('fetch', {
          namespace: 'navigation',
          endpoint: 'navigation',
        }),
      ]);
    },

    data () {
      return {
        loading: !this.$route.query.amp,
      };
    },

    computed: {
      amp () {
          return this.$store.state && this.$store.state.settings && this.$store.state && this.$store.state.amp;
      },

      popup () {
        return this.$store.state && this.$store.state.popup && this.$store.state.popup.item;
      },

      settings () {
        return this.$store.state && this.$store.state.settings;
      },

      navigation () {
        return this.$store.state && this.$store.state.navigation;
      },

      main_promo () {
        return this.$store.state && this.$store.state.page && this.$store.state.page.main_promo;
      },
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        this.setYandexMetrikaChecker();
        this.setServiceWorker();
        this.setCouponPopup();
      }
    },

    methods: {
      toggle() {
        this.$refs.app.classList.toggle('app--toggle');
      },

      onLoading () {
        this.loading = true;
      },

      onLoaded () {
        this.loading = false;
      },

      setYandexMetrikaChecker () {
        const interval = window.setInterval(() => {
          if (window[yandex]) {
            this.$store.commit(TRACK_SET_YANDEX, window[yandex]);
            window.clearInterval(interval);
          }
        }, 1000);
      },

      setServiceWorker () {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/dist/service-worker.js', {
            scope: '/',
          }).then(reg => {
            console.log("%c Vessna-Wedding %c Service worker registered",  'background: #b19b65; color: #ffffff', 'color: #000000', reg);
          }).catch(err => {
            console.log(err);
          });
        }
      },

      setCouponPopup () {
        if (!this.$cookie.get(COOKIES.STATE_COUPON_PRESENTED)) {
          setTimeout(() => {
            this.$store.commit('POPUP_SET', { popup: 'popup-coupon' });
            this.$cookie.set(COOKIES.STATE_COUPON_PRESENTED, COOKIES.STATE_COUPON_PRESENTED, {
              expires: '1Y',
            });
          }, 10000);
        }
      },
    },
  };
</script>

<style lang="scss">
  // @import '~bootstrap/dist/css/bootstrap';

  html {
    height: 100%;
    background: $gray1;
  }

  body {
    height: 100%;
    background: $gray1 !important;
  }

  h1, h2, h3, h4, h5, h6, ul {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  .app {
    display: flex;
    position: relative;
    flex-direction: column;
    min-height: 100%;
    left: 0;
    transition: transform ease-in 0.3s;

    &--toggle {
      transform: translateX(-90%);
    }
  }

  .global-router-view {
    flex: 1;
    flex-basis: auto;
  }

  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .2s;
  }
  .fade-leave-to + .fade-enter-to {
    position: absolute;
  }
  .fade-enter-active {
    transition-delay: .2s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  ::selection {
    background: #c9b486;
    color: #fff
  }

  ::-moz-selection {
    background: #c9b486;
    color: #fff
  }

  ::-webkit-selection {
    background: #c9b486;
    color: #fff
  }

  body {
  	position: relative;
  	width: 100%;
  	transition: left .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

body.body--swipe-opened {
	position: fixed;
	left: 80%;

	@media #{$large} {
		left: 25%;
	}

	@media #{$medium} {
		left: 30%;
	}

	@media #{$tablet} {
		left: 50%;
	}

	@media #{$phablet} {
		left: 70%;
	}
}

body.body--swipe-closed {
	position: relative;
	left: 0;
}
</style>
