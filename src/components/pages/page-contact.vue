<template>
  <main class="page-contact">
    <module-contact-info
      :items="contact"
    />
    <module-article
      :article="article"
    />
    <module-dealers-map
      :dealers="dealers"
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
  import ModuleDealersMap from '@/components/module/module-dealers-map';
  import ModuleContactInfo from '@/components/module/module-contact-info';
  import ModuleCallToAction from '@/components/module/module-call-to-action';

  import store from '@/store/';

  function fetch (store, route) {
    return Promise.all([
      store.dispatch('fetch', {
        namespace: 'page',
        endpoint: 'page/contact',
      }),
    ]);
  }

  export default {
    name: 'PageContact',

    extends: Page,

    components: {
      'module-article': ModuleArticle,
      'module-dealers-map': ModuleDealersMap,
      'module-contact-info': ModuleContactInfo,
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
        contact: [{
          name: 'Главный офис',
          contacts: [{
            type: 'phone',
            value: '+375 29 721 33 10',
          }, {
            type: 'email',
            value: 'contact@vessna.by',
          }],
        }, {
          name: 'Франшиза',
          contacts: [{
            type: 'phone',
            value: '+375 29 721 33 10',
          }, {
            type: 'email',
            value: 'contact@vessna.by',
          }],
        }, {
          name: 'Маркетинг',
          contacts: [{
            type: 'phone',
            value: '+375 29 721 33 10',
          }, {
            type: 'email',
            value: 'contact@vessna.by',
          }],
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
