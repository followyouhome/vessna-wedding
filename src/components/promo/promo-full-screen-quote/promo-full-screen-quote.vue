<template>
  <div class="promo promo-full-screen-quote">
    <div class="quote-wrapper">
      <svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" id="svg-root" width="100%" height="240px">
       <defs>
          <mask id="maskedtext">
             <rect width="100%" height="240px" x="0" y="0" fill="#fff"></rect>
             <text>
                <tspan text-anchor="middle" dx="50%" x="0" y="1em">
                  {{item.text1}}
                </tspan>
             </text>
             <text>
                <tspan text-anchor="middle" dx="50%" x="0" y="3em">
                   {{item.text2}}
                </tspan>
             </text>
             <text>
                <tspan text-anchor="middle" dx="50%" x="0" y="5em">
                   {{item.text3}}
                </tspan>
             </text>
          </mask>
       </defs>
       <rect width="100%" height="100%" x="0" y="0" :fill="color" mask="url(#maskedtext)"></rect>
    </svg>
    </div>
    <div class="video-wrapper" v-show="show">
      <video ref="video" autoplay="true" loop="true" muted="true">
        <source :src="item.video_mp4" type="video/mp4;">
        <source :src="item.video_webm" type="video/webm;">
        <source :src="item.video_ogv" type="video/ogg;">
      </video>
    </div>
  </div>
</template>

<script>
  import InView from 'in-view';
  import Promo from '../promo';

  export default {
    name: 'PromoFullScreenQuote',

    extends: Promo,

    props: ['item'],

    data () {
      return {
        show: false,
        color: '#fafafa',
      };
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        InView('.promo-full-screen-quote .quote-wrapper')
          .on('enter', el => {
            this.show = true;
          })
          .on('exit', el => {
            this.show = false;
          });
      }
    },
  };
</script>

<style scoped lang="scss">
  .promo-full-screen-quote {
    position: relative;
    height: 150vh;
    overflow: hidden;
    z-index: $z-background;

    transform: none;
    border: none;

    @media #{$large} {
      height: 130vh;
    }

    @media #{$tablet} {
      display: none;
    }
  }

  .quote-wrapper {
    position: relative;
    opacity: 0.9;
    z-index: $z-default;

    &:before, &:after {
      content: '';
      display: block;
      height: 40vh;
      margin-top: -5px;
      background: $white2;
    }

    text {
      font: 3rem/1em 'Akzidenz Grotesk';
      letter-spacing: 10px;
    }
  }

  .video-wrapper {
    position: fixed;
    left: 0;
    top:0;
    height: 100vh;

    video {
      width: 100vw;
      height: auto;

      @media #{$large} {
        height: 100vh;
        width: auto;
      }
    }
  }
</style>
