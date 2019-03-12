<template>
  <div class="promo promo--label [[+promo_size]]">
    <div class="promo__wrapper promo--label__wrapper">
      <div class="promo__content-wrapper promo--label__content-wrapper">
        <div class="promo--label__headline">
          <h4 class="promo__text-subheadline">[[+content]]</h4>
        </div>
        <div class="promo--label__copy">
          <p class="promo__text-copy"></p>
        </div>
      </div>
    </div>
</div>

</template>

<script>
  export default {
    name: 'promo-label',

    props: ['promo'],
  };
</script>

<style lang="scss">
  .promo--label {

  	width: percentage(1 / 2);

  	@media #{large} {
  		width: percentage(1 / 2);
  	}

  	@media #{medium} {
  		width: percentage(1 / 2);
  	}

  	@media #{phablet} {
  		width: 100%;
  	}

  	@media #{mobile} {
  	}
  }

  .promo--label__wrapper {
  	height: 80px;
  	text-align: center;

  	@media #{phablet} {
  		height: 70px;
  	}

  	@media #{mobile} {
  		height: 60px;
  	}
  }

  .promo--label__content-wrapper {
  	display: inline-block;
  	vertical-align: middle;

  	text-align: center;
  }

  .promo--label__headline {
  	margin: 0 20px;
  }

  .promo--label__copy {
  	margin: 0 20px;
  }
</style>
