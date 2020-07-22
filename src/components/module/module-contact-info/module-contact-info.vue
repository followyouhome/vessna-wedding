<template>
  <div class="module module-contact-info container">
    <h2 class="module-contact-info__headline">Контакты</h2>
    <div class="module__wrapper module-contact-info__wrapper row" content-class="mt-3">
      <div class="col-4" v-for="item in items" :title="item.name" :key="item.name">
        <promo-contact-card :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tabs, Tab } from 'vue-tabs-component';
  import PromoContactCard from '@/components/promo/promo-contact-card/promo-contact-card.vue';

  export default {
    name: 'module-contact-info',

    components: {
      Tab,
      Tabs,
      PromoContactCard,
    },

    props: ['items'],

    data () {
      return {

      };
    },
  };
</script>

<style lang="scss">
  .module-contact-info {
    margin-bottom: 50px;
  }

  .module-contact-info__wrapper {
    padding: 30px;
    background: $gray2;

    .nav-tabs {
      margin-bottom: 30px;
      justify-content: space-around;
      border: none;
      font: 2rem/1 $RistrettoProLight;
    }

    .nav-link {
      color: $black;
      border: none;

      &.active {
        background: transparent;
        text-decoration: underline;
      }
    }

    .tab-pane {
      outline: none;
    }

    .promo {
      margin: 20px auto;
      width: 330px;
    }
  }

  .module-contact-info__headline {
    margin: 20px 0;
    font: 3rem/3rem $RistrettoProLight;
    text-align: center;
  }
</style>
