<template>
  <main class="news-listing isotope-grid" style="position: relative; height: 1015.92px;">
    <div class="isotope-grid__sizer"></div>
    <promo-news v-for="post in news" v-bind:promo="post"></promo-news>
    </li>
  </main>
</template>

<script>
  import PromoNews from '../promo/promo-news.vue';

  export default {
    name: 'page-news-hub',

    asyncData ({ store }) {
      return store.dispatch('fetch', {
        endpoint: 'news'
      });
    },

    components: {
      'promo-news': PromoNews
    },

    computed: {
      news () {
        return this.$store.state.news;
      }
    }
  }
</script>
