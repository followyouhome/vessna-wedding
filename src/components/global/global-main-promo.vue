<template>
  <header v-bind:class="['global-main-promo', align]" v-if="promo.media != 'null'">
    <div class="global-main-promo__hgroup" v-if="promo.headline || promo.subline ">
      <div class="global-main-promo__hgroup__content">
        <div class="global-main-promo__hgroup__wrapper">
          <h1><span :class="headline.size" v-html="headline.text"></span></h1>
          <hr>
          <h2 v-html="promo.subline"></h2>
        </div>
      </div>
    </div>
    <div class="global-main-promo__wrapper">
      <image-deferred v-bind:image="image" v-if="promo.media == 'image'"></image-deferred>
      <video-regular v-bind:promo="promo" v-if="promo.media == 'video'"></video-regular>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'GlobalMainPromo',

    props: ['promo'],

    computed: {
      headline () {
        return {
          text: this.promo.headline,
          size: this.fontsize(this.promo.headline),
        };
      },

      video () {
        return this.promo.video;
      },

      image () {
        return this.promo.image;
      },

      align () {
        const align = this.promo.align;
        let result = '';

        if (align) {
          if (align.indexOf("top") != -1) {
            result += ' global-main-promo--hgroup-top';
          }

          if (align.indexOf("middle") != -1) {
            result += ' global-main-promo--hgroup-middle';
          }

          if (align.indexOf("bottom") != -1) {
            result += ' global-main-promo--hgroup-bottom';
          }

          if (align.indexOf("left") != -1) {
            result += ' global-main-promo--hgroup-left';
          }

          if (align.indexOf("center") != -1) {
            result += ' global-main-promo--hgroup-center';
          }

          if (align.indexOf("right") != -1) {
            result += ' global-main-promo--hgroup-right';
          }
        }

        return result;
      },
    },

    methods: {
      fontsize (text) {
        const length = text.replace(/(<([^>]+)>)/ig, '').length;

        if (length > 30) {
          return 'smaller';
        } else if (length < 15) {
          return 'bigger';
        }
      },
    },
  };
</script>

<style lang="scss">
  .global-main-promo {
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      display: block;
      padding-top: 45%;

      @media #{$xlarge} {
        padding-top: 45%;
      }

      @media #{$medium} {
        padding-top: 45%;
      }

      @media #{$tablet} {
        padding-top: 45%;
      }

      @media #{$phablet} {
        padding-top: 45%;
      }

      @media #{$mobile} {
        padding-top: 45%;
      }
    }

    &.global-main-promo__image--position-bottom .image-deferred img {
      top: 0;
      bottom: auto;
    }

    &.global-main-promo__image--position-top .image-deferred img {
      top: auto;
      bottom: 0;
    }
  }

  .global-main-promo__wrapper {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: $z-default;
  }

  .global-main-promo__hgroup {
    display: flex;
    align-items: center;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 40vw;
    z-index: $z-default + 1;

    @media #{$tablet} {
      width: 50vw;
    }

    @media #{$phablet} {
      width: 60vw;
    }

    .global-main-promo--hgroup-left & {
      left: 13%;

      @media #{$medium} {
        left: 7%;
      }

      @media #{$phablet} {
        left: 5%;
      }

      @media #{$mobile} {
        left: 0;
        right: 0;
      }
    }

    .global-main-promo--hgroup-center & {
      left: 0;
      right: 0;
    }

    .global-main-promo--hgroup-right & {
      right: 10%;

      @media #{$medium} {
        right: 7%;
      }

      @media #{$phablet} {
        right: 5%;
      }

      @media #{$mobile} {
        left: 0;
        right: 0;
      }
    }

    .global-main-promo--hgroup-top & {

      .global-main-promo__hgroup__content {
        position: absolute;
        top: 10%;
      }
    }

    .global-main-promo--hgroup-middle & {

      .global-main-promo__hgroup__content {
        vertical-align: middle;
      }
    }

    .global-main-promo--hgroup-bottom & {
      .global-main-promo__hgroup__content {
        position: absolute;
        bottom: 10%;
      }
    }
  }

  .global-main-promo__hgroup__content {
    display: inline-block;
    position: relative;
    padding: 20px;

    font-size: 40px;
    text-align: center;

    background: rgba(255,255,255,0.9);

    @media #{$phablet} {
      font-size: 30px;
    }

    @media #{$mobile} {
      font-size: 20px;
    }

    > * {
      position: relative;
      margin: 0;
      z-index: 1;
    }

    h1, h2, h3, h4, h5, p {
      font-family: 'Akzidenz Grotesk';
      font-size: 1.5rem;
      color: $black;

      @media #{$medium} {
        font-size: 1.4rem;
      }

      @media #{$tablet} {
        font-size: 1.2rem;
      }

      @media #{$phablet} {
        font-size: 1rem;
      }

      @media #{$mobile} {
        font-size: 1rem;
      }
    }

    h1 {
      font-size: 5rem;
      font-weight: lighter;
      text-transform: uppercase;
      letter-spacing: 2px;

      > span {
        display: block;
      }

      .bigger {
        font-size: 1.5em;
      }

      .smaller {
        @media #{$large} {
          font-size: 0.6em;
        }

        @media #{$medium} {
          font-size: 0.7em;
        }

        @media #{$mobile} {
          font-size: 0.75em;
        }
      }

      @media #{$medium} {
        font-size: 4rem;
      }

      @media #{$tablet} {
        font-size: 3rem;
      }

      @media #{$phablet} {
        font-size: 2rem;
      }

      @media #{$mobile} {
        font-size: 1.3rem;
      }
    }

    hr {
      width: 50%;
      height: 1px;
      border: none;
      background: $black;
    }
  }

  .global-main-promo__hgroup__wrapper {
    padding: 25px;
    border: 1px solid rgb(214, 214, 214);
    background: white;

    @media #{$phablet} {
      padding: 20px;
    }

    @media #{$mobile} {
      padding: 15px;
    }
  }
</style>
