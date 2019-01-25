<template>
  <main class="page"></main>
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
        htmlAttrs: {
          lang: 'ru-ru',
        },
      };
    },

    asyncData ({ store, route }) {
  
    },

    computed: {
      seo () {
        return this.$store.state.page && this.$store.state.page.seo;
      },
    },
  };
</script>

<style lang="scss">
  .main {
    &--width-limit {
      margin: auto;
      max-width: 1200px;
    }

    &--layout-1-1 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      & > * {
        width: 50%;
      }

      @media #{$tablet} {
        display: block;
        flex-direction: column;

        & > * {
          width: 100%;
        }
      }
    }

    &--layout-1-2 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      & > *:nth-child(1) {
        width: 33%;
      }

      & > *:nth-child(2) {
        width: 67%;
      }

      @media #{$tablet} {
        display: block;
        flex-direction: column;

        & > * {
          width: 100%;
        }
      }
    }

    &--layout-2-1 {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      & > *:nth-child(1) {
        width: 67%;
      }

      & > *:nth-child(2) {
        width: 33%;
      }

      @media #{$tablet} {
        display: block;
        flex-direction: column;

        & > * {
          width: 100%;
        }
      }
    }
  }

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
