<template>

</template>

<script>
  import InView from 'in-view';

  export default {
    computed: {
      amp () {
        return this.$store && this.$store.state && this.$store.state.settings && this.$store.state.settings.amp;
      },
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        if (this.$el.classList.contains('promo--fade-in')) {
          InView('.promo--fade-in')
            .on('enter', () => this.fadein = false)
            .on('exit', () => this.fadein = true);
        }
      }
    },
  };
</script>

<style lang="scss">
  .promo {
    position: relative;
    z-index: $z-default;
    box-sizing: border-box;
    opacity: 1;
    transform: translateY(0);
    border: 10px solid transparent;
    text-transform: uppercase;
  }

  .promo--fade-in {
    opacity: 0;
    transform: translateY(5px);

    .promo__wrapper > * {
      transform: translateY(10px);
    }
  }

  .promo--fade-out {
    opacity: 0;
    transform: translateY(5px);

    .promo__wrapper > * {
      transform: translateY(10px);
    }
  }

  .promo__content-wrapper {
    box-sizing: border-box
  }

  .promo__image-wrapper {
    display: block;
    overflow: hidden;

    img {
      display: block;
      pointer-events: none;
      user-select: none
    }
  }

  .promo__line {
    border-top: 1px solid #e6e6e6;
    border-right: none;
    border-bottom: none;
    border-left: none
  }

  .promo__wrapper {
    overflow: hidden;
    background-color: #fff;
    opacity: 1;
    transform: translateY(0);
  }

  .promo__text-headline {
    margin: 0;
    font: 18px/24px Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
    text-decoration: none;
    text-transform: uppercase;
    color: #515151;
  }

  @media screen and (max-width:767px) {
      .promo__text-headline {
          font-size: 14px;
          line-height: 16px
      }
  }

  .promo__text-headline--normal-case {
      text-transform: none
  }

  .promo__text-subheadline {
      margin: 0;
      font: 15px/20px Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      color: #515151;
  }

  .promo__text-title {
      font: 35px/39px Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #b19b65
  }

  .promo__text-title:hover {
      text-decoration: none
  }

  @media screen and (max-width:1023px) {
      .promo__text-title {
          font-size: 2rem;
          line-height: 1.8em;
          text-align: center
      }
  }

  @media screen and (max-width:767px) {
      .promo__text-title {
          font-size: 1.6rem
      }
  }

  @media screen and (max-width:480px) {
      .promo__text-title {
          font-size: 1.5rem;
          line-height: 1.5em
      }
  }

  .promo__text-title--normal-case {
      text-transform: none
  }

  .promo__text-line {
      border-top: 1px solid #e6e6e6;
      border-left: none;
      border-right: none;
      border-bottom: none
  }

  .promo__text-date {
      font: 13px/1.3em Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
      text-transform: uppercase;
      color: #c9b486
  }

  .promo__text-copy {
      margin: 0;
      font: 14px/19px Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
      text-transform: none;
      color: #a2a2a2
  }

  .promo__text-footnote {
      font: 14px/24px Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
      text-decoration: none;
      text-transform: none;
      color: #000;
  }

  .promo__text-footnote:hover {
      text-decoration: none;
      color: #a2a2a2
  }

  .promo__text-tag {
      font: 12px/24px Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
      text-decoration: none;
      text-transform: none;
      color: #000
  }
</style>
