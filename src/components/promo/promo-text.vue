<template>
  <div class="promo promo--text [[+tv.promo_size]]">
  	<div class="promo__wrapper promo--text__wrapper">
	    [[+content]]
  	</div>
</div>
</template>

<script>
  export default {
    name: 'promo-text',

    props: ['promo'],
  };
</script>

<style lang="scss">
  .promo--text {
    border: 10px solid transparent;
  }

  .promo--text__title {
    margin-bottom: 10px !important;

    // .promo__text-title;
  }

  .promo--text__headline {
    margin: 30px 0 !important;

    // .promo__text-headline;
  }

  .promo--text__subheadline {

  }

  .promo--text__line {
    // .promo__text-line;
  }

  .promo--text__content {
    // .module__text-content;
  }

  .promo--text__wrapper {
    padding: 40px;
    background: @white;

    @media #{$tablet} {
      padding: 30px;
    }

    @media #{$mobile} {
      padding: 15px 20px;
    }

    h1 {
      .promo--text__title;
    }

    h2 {
      .promo--text__headline;
    }

    h3, h4, h5 {
      .promo--text__subheadline;
    }

    hr {
      .promo--text__line;
    }

    p {
      margin: 10px 0;
      .promo--text__content;
    }

    ul {
      margin: 0 0 10px 20px;

      .promo--text__content;
      .clearfix;

      li {
        float: left;
      }
    }

    ol {
      margin: 20px 0px;
      padding: 0;

      .promo--text__content;

      li {
          margin-left: 40px;
        line-height: 20px;
        list-style-type: disc;

        @media #{$mobile} {
          margin-left: 20px;
        }
      }
    }
  }
</style>
