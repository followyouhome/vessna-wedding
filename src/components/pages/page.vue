<template>
  <main class="page">
    <slot name='error' v-if="error">
      Страница не найдена
    </slot>
    <slot name='content' v-else>

    </slot>
  </main>
</template>

<script>
  export default {
    name: 'page',

    props: ['amp'],

    metaInfo () {
      return {
        title: this.seo.name,
        meta: [
          // Meta info
          { name: 'description', content: this.seo.description },

          // Open graph
          { property: 'og:description', content: this.seo.description },
          { property: 'og:image', content: this.seo.image && this.seo.image.url },
          { property: 'og:title', content: this.seo.name },
          { property: 'og:url', content: 'https://vessna.wedding' + this.$route.fullPath },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'Vessna | Свадебные и вечерние платья из Беларуси' },

          // Twitter card
          { property: 'twitter:description', content: this.seo.description },
          { property: 'twitter:image', content: this.seo.image && this.seo.image.url },
          { property: 'twitter:title', content: this.seo.name },
          { property: 'twitter:site', content: '@vessna_dress' },
          { property: 'twitter:card', content: 'summary_large_image' },
        ],
        htmlAttrs: {
          lang: 'ru-ru',
          amp: this.amp,
        },
      };
    },

    asyncData ({ store, route }) {

    },

    beforeRouteUpdate (to, from, next) {
      this.loading();
      next();
    },

    beforeRouteLeave (to, from, next) {
      this.loading();
      next();
    },

    mounted () {
      this.loaded();
    },

    updated () {
      this.loaded();
    },

    data () {
      return {
        default: {
          name: 'Страница не найдена',
          description: 'Данная страница отсутствует на нашем сайте',
        },
      };
    },

    computed: {
      error () {
        return !this.$store.state.page;
      },

      seo () {
        return this.$store.state.page && this.$store.state.page.seo || this.default;
      },
    },

    methods: {
      loading () {
        if (__VUE_ENV__ === 'client') {
          this.$emit('loading');
        }
      },

      loaded () {
        if (__VUE_ENV__ === 'client') {
          this.$emit('loaded');
        }
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
</style>
