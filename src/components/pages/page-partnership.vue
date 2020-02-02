<template>
  <main class="page-contact">
    <module-article
      :article="article"
    />
    <module-our-brands
      :brands="brands"
    />
    <module-call-to-action
      :content="callToAction.content"
      :button="callToAction.button"
    />
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import ModuleArticle from '@/components/module/module-article';
  import ModuleOurBrands from '@/components/module/module-our-brands';
  import ModuleCallToAction from '@/components/module/module-call-to-action';

  import store from '@/store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/partnership',
      }),
    ]);
  }

  export default {
    name: 'PageContact',

    extends: Page,

    components: {
      'module-article': ModuleArticle,
      'module-our-brands': ModuleOurBrands,
      'module-call-to-action': ModuleCallToAction,
    },

    asyncData ({ store, route }) {
      return Promise.all([
        this.extends.asyncData({store, route}),
        fetch(store, route),
      ]);
    },

    beforeRouteEnter (to, from, next) {
      __VUE_ENV__ === 'server' ? next() : fetch(store, to).then(() => next());
    },

    beforeRouteUpdate (to, from, next) {
      __VUE_ENV__ === 'server' ? next() : fetch(store, to).then(() => next());
    },

    data () {
      return {
        brands: [{
          promo: {
    		    media: 'image',
    		    image: {
    		      secure_url: '/images/pages/vessna-wedding.jpg',
    		      url: '/images/pages/vessna-wedding.jpg',
    		      height: 1280,
    		      width: 1920,
    		    },
    		    headline: 'Vessna Wedding',
    		    alt: '',
    		  },
    		  route: {
    		    path: '/wedding-dresses',
    		  },
        }, {
          promo: {
    		    media: 'image',
    		    image: {
    		      secure_url: '/images/pages/vessna-dress.jpg',
    		      url: '/images/pages/vessna-dress.jpg',
    		      height: 1280,
    		      width: 1920,
    		    },
    		    headline: 'Vessna Dress',
    		    alt: '',
    		  },
    		  route: {
    		     path: '/prom-and-party-dresses',
    		  },
        }],
        callToAction: {
          content: {
            headline: 'Готовы стать нашим партнёром?',
            subline: 'Заполните анкету и наш менеджер свяжется с вами',
          },
          button: {
            action: '',
            text: 'Заполните анкету',
          },
        },
      };
    },

    computed: {
      article () {
          return this.$store.state.page.content;
      },

      dealers () {
        return this.$store.state.page.dealers;
      },
    },
  };
</script>

<style lang="scss">
  .page-contact {
    background: $white;
  }
</style>
