<template>
  <div class="promo promo-contact-card">
    <div class="promo-wrapper promo-contact-card__wrapper">
      <p class="promo-contact-card__description">
        {{item.description}}
      </p>
      <p class="promo-contact-card__subline">Контакты</p>
      <p class="promo-contact-card__contact" v-for="contact in item.contacts">
        <vector-icon :icon="contact.type"></vector-icon>
        <span>{{contact.value}}</span>
      </p>
      <div class="promo-contact-card__button">
        <simple-button
          popup="popup-feedback-form"
          type="block"
          text="Напишите нам"
        />
      </div>
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
  .promo-contact-card {
    padding: 20px;
    background: $white;
    max-width: 400px;

    @media #{$phablet} {
      max-width: 100%;
    }
  }

  .promo-contact-card__description {
    margin: 15px 0;
    text-align: center;
  }

  .promo-contact-card__headline {
    margin: 20px 0;
    text-align: center;
    font: 1.5rem/1 $RistrettoProLight;
    color: $black;
    letter-spacing: 2px;
  }

  .promo-contact-card__subline {
    margin: 15px 0;
    text-align: center;
    font: 0.8rem/1 $FuturaPTLight;
    text-transform: uppercase;
    color: $dark5;
    letter-spacing: 2px;
  }

  .promo-contact-card__contact {
    margin: 10px 0;
    text-align: center;
    font: 1rem/1 $FuturaPTLight;
    color: $black;
    letter-spacing: 3px;
  }

  .promo-contact-card__button {
    margin-top: 30px;
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
