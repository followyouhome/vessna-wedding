<template>
  <div class="promo promo-contact-card">
    <div class="promo-wrapper promo-contact-card__wrapper">
      <h5 class="promo-contact-card__headline">{{item.name}}</h5>
      <p class="promo-contact-card__subline">Контакты</p>
      <p class="promo-contact-card__item" v-for="contact in item.contacts">
        <!-- <vector-icon icon="palette"></vector-icon> -->
        <span>{{contact.value}}</span>
      </p>

      <simple-button
        text="Напишите нам"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'promo-contact-card',

    props: ['item'],

    data () {
      return {

      };
    },
  };
</script>

<style lang="scss">
  .promo-contact-card__headline {
    margin: 10px 0;
    font: 1.5rem/1 $RistrettoProLight;
    color: $black;
    letter-spacing: 2px;
  }

  .promo-contact-card__subline {
    font: 1rem/1 $RistrettoProMedium;
    text-transform: uppercase;
    color: $dark5;
    letter-spacing: 3px;
  }

  .promo-contact-card__item {

  }
</style>

<story group="Promos" name="Contact Card">
  <promo-contact-card
    :item="{
      name: 'ООО Вектор',
      contacts: [{
        type: 'phone',
        value: '+375 29 228 77 27'
      }, {
        type: 'email',
        value: 'test@mail.com'
      }]
    }"
  />
</story>
