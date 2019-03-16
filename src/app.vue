<template>
  <div id="app" class="app" ref="app">
    <global-announcement :announcement="settings.announcement" v-if="settings.announcement"/>
    <global-main-promo :promo="main_promo" v-if="main_promo"/>
    <global-navigation :navigation="navigation" v-if="navigation"/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <global-footer/>
    <global-popup-container :popup="popup" v-if="popup"/>
  </div>
</template>

<script>
  import Vue from 'vue';
  import NoSSR from 'vue-no-ssr';
  import GlobalFooter from './components/global/global-footer.vue';
  import GlobalMainPromo from './components/global/global-main-promo.vue';
  import GlobalNavigation from './components/global/global-navigation/global-navigation.vue';
  import GlobalAnnouncement from './components/global/global-announcement.vue';
  import GlobalPopupContainer from './components/global/global-popup-container';
  import CaptchaGoogle from './components/atoms/captcha-google.vue';
  import ImageDeferred from './components/atoms/image-deferred.vue';
  import VideoRegular from './components/atoms/video-regular.vue';
  import VectorLogo from './components/atoms/vector-logo.vue';
  import IconToggle from '@/components/atoms/icon-toggle.vue';

  import 'normalize.css';

  Vue.component('no-ssr', NoSSR);
  Vue.component('captcha-google', CaptchaGoogle);
  Vue.component('image-deferred', ImageDeferred);
  Vue.component('video-regular', VideoRegular);
  Vue.component('vector-logo', VectorLogo);
  Vue.component('icon-toggle', IconToggle);

  export default {
    name: 'App',

    components: {
      'global-footer': GlobalFooter,
      'global-main-promo': GlobalMainPromo,
      'global-navigation': GlobalNavigation,
      'global-announcement': GlobalAnnouncement,
      'global-popup-container': GlobalPopupContainer,
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
        }),

        store.dispatch('fetch', {
          namespace: 'navigation',
          endpoint: 'navigation',
        }),
      ]);
    },

    computed: {
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

    methods: {
      fullscreen () {
        this.$refs.app.classList.toggle('fullscreen');
      },
    },
  };
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    height: 100%;
  }

  .app {
    display: flex;
    position: relative;
    flex-direction: column;
    min-height: 100%;
    left: 0;
    transition: left cubic-bezier(0.4, 0.31, 0.59, 1.41) 0.5s;

    @media #{$tablet} {
      padding-top: 60px;
    }
  }

  .main {
    flex: 1;
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
</style>
