<template>
  <main class="page-contact">
    <module-contact-info
      :items="contact"
    />
    <module-article
      :article="article"
    />
    <!-- <module-dealers-map
      :dealers="dealers"
    /> -->
    <module-call-to-action
      :content="callToAction.content"
      :button="callToAction.button"
    />
  </main>
</template>

<script>
  import Page from '@/components/pages/page.vue';
  import { ModuleArticle, ModuleDealersMap, ModuleContactInfo, ModuleCallToAction } from '@/components/module';

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
          name: 'Франшиза',
          description: 'По вопросам покупки франшизы в России и странах EU 💃🏽',
          contacts: [{
            type: 'phone',
            value: '+375 29 721 33 10',
          }, {
            type: 'email',
            value: 'svetlana@vessna.by',
          }],
        }, {
          name: 'Отдел продаж',
          description: 'По вопросам новых оптовых закупок и сопровождения текущих заказов 📰',
          contacts: [{
            type: 'phone',
            value: '+375 29 610 30 00',
          }, {
            type: 'email',
            value: 'contact@vessna.by',
          }],
        }, {
          name: 'Маркетинг',
          description: 'По вопросам различных ивентов, рекламы и продвижения 🏷',
          contacts: [{
            type: 'phone',
            value: '+375 33 609 50 15',
          }, {
            type: 'email',
            value: 'vladislav@vessna.by',
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
