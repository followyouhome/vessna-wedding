<template>
    <div id="app">
        <module-main-promo v-if="main_promo"></module-main-promo>
        <module-nav></module-nav>
        <main>
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </main>
        <module-footer></module-footer>
        <module-popup-container v-if="popup"></module-popup-container>
    </div>
</template>

<script>
  import Vue from 'vue';
  import ModuleNav from './components/global/module-nav.vue';
  import ModuleFooter from './components/global/module-footer.vue';
  import ModuleMainPromo from './components/global/module-main-promo.vue';
  import ModulePopupContainer from './components/global/module-popup-container';
  import ImageDeferred from './components/atoms/image-deferred.vue';
  import VideoRegular from './components/atoms/video-regular.vue';

  Vue.component('image-deferred', ImageDeferred);
  Vue.component('video-regular', VideoRegular);

  export default {
    name: 'app',
    components: {
      'module-nav': ModuleNav,
      'module-footer': ModuleFooter,
      'module-main-promo': ModuleMainPromo,
      'module-popup-container': ModulePopupContainer,
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
