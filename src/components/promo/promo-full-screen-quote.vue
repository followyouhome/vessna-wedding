<template>
  <div class="promo promo-full-screen-quote">
    <div class="quote-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="svg-root" width="100%" height="10em">
       <defs>
          <mask id="maskedtext">
             <rect width="100%" height="100%" x="0" y="0" fill="#fff"></rect>
             <text>
                <tspan text-anchor="middle" dx="50%" x="0" y="1em">{{text1}}</tspan>
             </text>
             <text>
                <tspan text-anchor="middle" dx="50%" x="0" y="3em">
                   {{text2}}
                </tspan>
             </text>
             <text>
                <tspan text-anchor="middle" dx="50%" x="0" y="5em">
                   {{text3}}
                </tspan>
             </text>
          </mask>
       </defs>
       <rect width="100%" height="100%" x="0" y="0" :fill="color" mask="url(#maskedtext)"></rect>
    </svg>
    </div>
    <div class="video-wrapper">
      <video autoplay="true" loop="true" muted="true">
        <source :src="video_mp4" type="video/mp4;">
        <source :src="video_webm" type="video/webm;">
        <source :src="video_ogv" type="video/ogg;">
      </video>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'promo-full-screen-quote',

    data () {
      return {
        text1: 'Мы будем на',
        text2: 'Moscow Wedding Fashion',
        text3: 'А вы?',
        color: '#fafafa',
        video_webm: 'https://vessna.blob.core.windows.net/vessna/vessna-quote.webm',
        video_mp4: 'https://vessna.blob.core.windows.net/vessna/vessna-quote.mp4',
        video_ogv: 'https://vessna.blob.core.windows.net/vessna/vessna-quote.ogv',
      };
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
  }

  .quote-wrapper {
    position: relative;
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
    }
  }
</style>
