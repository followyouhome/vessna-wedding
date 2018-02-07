<template>
    <div id="app">
        <global-main-promo v-if="main_promo"></global-main-promo>
        <module-nav></module-nav>
        <main>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </main>
        <module-footer></module-footer>
        <global-popup-container v-if="popup"></global-popup-container>
        <!--<script src='https://www.google.com/recaptcha/api.js'></script>-->
        <div class="g-recaptcha" data-sitekey="6Lf__kAUAAAAAAfyKZ7h_54WlKBUOrQTkvmAbhEC"></div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import NoSSR from 'vue-no-ssr';
  import ModuleNav from './components/global/module-nav.vue';
  import ModuleFooter from './components/global/module-footer.vue';
  import GlobalMainPromo from './components/global/global-main-promo.vue';
  import GlobalPopupContainer from './components/global/global-popup-container';
  import ImageDeferred from './components/atoms/image-deferred.vue';
  import VideoRegular from './components/atoms/video-regular.vue';

  Vue.component('no-ssr', NoSSR);
  Vue.component('image-deferred', ImageDeferred);
  Vue.component('video-regular', VideoRegular);

  export default {
    name: 'app',

    components: {
      'module-nav': ModuleNav,
      'module-footer': ModuleFooter,
      'global-main-promo': GlobalMainPromo,
      'global-popup-container': GlobalPopupContainer,
    },

    metaInfo: {
      htmlAttrs: {
        lang: 'ru-ru',
      },
    },

    computed: {
      main_promo () {
        return this.$store.state['main_promo'];
      },

      popup () {
        return this.$store.state['popup'];
      },
    },
  };
</script>

<style>
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
</style>
