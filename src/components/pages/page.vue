<template>

</template>

<script>
  import Vue from 'vue';
  import store from '../../store/';

  export default {
    name: 'page',

    metaInfo () {
      return {
        title: this.seo.name,
        meta: [
          // Meta info
          { name: 'description', content: this.seo.description },

          // Open graph
          { property: 'og:description', content: this.seo.description },
          // { property: 'og:image', content: this.seo.image.secure_url },
          { property: 'og:title', content: this.seo.name },
          { property: 'og:url', content: 'https://vessna.wedding' + this.$route.fullPath },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Vessna | Свадебные и вечерние платья из Беларуси' },

          // Twitter card
          { property: 'twitter:description', content: this.seo.description },
          // { property: 'twitter:image', content: this.seo.image.secure_url },
          { property: 'twitter:title', content: this.seo.name },
          { property: 'twitter:site', content: '@vessna_dress' },
          { property: 'twitter:card', content: 'summary_large_image' },
        ],
      };
    },

    asyncData ({ store, route }) {
      return Promise.all([
        store.dispatch('fetch', {
          endpoint: 'config',
          namespace: 'config',
          id: 'navigation',
        }),
      ]);
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        if (Vue.cookie.get('uid') && Vue.cookie.get('uid') !== this.$store.state.global.user._id) {
          this.$store.state.global.user._id = Vue.cookie.get('uid');
          this.$store.state.global.user.canAccessKeystone = Vue.cookie.get('canAccessKeystone') === 'true';
          this.$store.state.global.user.canAccessContent = Vue.cookie.get('canAccessContent') === 'true';
        }
      }
    },
  };
</script>

<style lang="scss">
  .promo {
    z-index: $z-default;
    position: relative;
  }
  .module {
    z-index: $z-default;
    position: relative;
    background: white;
  }
</style>
