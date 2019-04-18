<template>
  <b-container class="module module-contact-info">
    <h2 class="module-contact-info__headline">Контакты</h2>
    <b-tabs class="module__wrapper module-contact-info__wrapper" content-class="mt-3">
      <b-tab v-for="item in items" :title="item.name" :key="item.name">
        <promo-contact-card :item="item"/>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
  import PromoContactCard from '@/components/promo/promo-contact-card';

  export default {
    name: 'module-contact-info',

    components: {
      'promo-contact-card': PromoContactCard,
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

<story group="Modules" name="Contact Info">
  <module-contact-info
    :items="[{
      name: 'Главный офис',
      contacts: [{
        type: 'phone',
        value: '+375 29 856 77 00',
      }, {
        type: 'email',
        value: 'contact@vessna.by',
      }]
    }, {
      name: 'Отдел Снабжения',
      contacts: [{
        type: 'phone',
        value: '+375 29 156 06 00',
      }, {
        type: 'email',
        value: 'manager@vessna.by',
      }]
    }, {
      name: 'Отдел Маркетинга',
      contacts: [{
        type: 'phone',
        value: '+375 33 609 50 15',
      }, {
        type: 'email',
        value: 'marketing@vessna.by',
      }]
    }]"
  />
</story>
