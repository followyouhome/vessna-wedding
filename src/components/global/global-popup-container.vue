<template>
  <div class="global-popup-container" @click="check($event)">
    <popup-login v-if="popup === 'login'"/>
    <popup-signup v-if="popup === 'signup'"/>
  </div>
</template>

<script>
  import PopupLogin from '../popup/popup-login.vue';
  import PopupSignup from '../popup/popup-signup.vue';

  export default {
    name: 'global-popup-container',

    components: {
      'popup-login': PopupLogin,
      'popup-signup': PopupSignup,
    },

    computed: {
      popup () {
        return this.$store.state['popup'];
      },
    },

    methods: {
      check (e) {
        if(e.path[0] === this.$el) {
          this.$store.commit('POPUP_UNSET');
        }
      },
    },
  };

</script>

<style lang="scss">
  .global-popup-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: $z-popup;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.9);
  }
</style>
