<template>
  <div class="promo promo-label">
    <div class="promo__wrapper promo-label__wrapper">
      <h4 class="promo-label_headline" v-if="item.headline">
        {{item.headline}}
      </h4>
      <p class="promo-label_copy" v-if="item.copy">
        {{item.copy}}
      </p>
      <simple-button v-if="item.button"
        class="promo-label_button"
        :href="item.button.href"
      >{{item.button.text}}</simple-button>
    </div>
</div>

</template>

<script>
  export default {
    name: 'PromoLabel',

    props: ['item'],
  };
</script>

<style lang="scss">
  .promo-label {
    padding: 20px;
    height: 400px;
    width: 500px;
    background: $gray1;
    border: 10px solid $gray2;
  }

  .promo-label__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    height: 100%;
    border: 1px solid $gray1;
    background: $white;
  }

  .promo-label_headline {
    width: 80%;
    margin: 10px 0;
    text-align: center;
    font: 4rem/1 $RistrettoProMedium;
    letter-spacing: 0px;
    color: $black;
  }

  .promo-label_copy {
    width: 80%;
    margin: 10px 0;
    text-align: center;
    font: 2rem/1 $RistrettoProLight;
    letter-spacing: 1px;
    color: $dark;
  }

  .promo-label_button {
    margin: 10px 0;
    background: $black;
  }
</style>
