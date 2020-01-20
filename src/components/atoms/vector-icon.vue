<template>
  <no-ssr>
    <div :class="['vector-icon', `vector-icon-${icon}`]" />
  </no-ssr>
</template>

<script>
  export default {
    name: 'VectorIcon',

    props: ['icon'],
  };
</script>

<style lang="scss">
  .vector-icon,
  [class*="vector-icon-"]:before,
  [class^=vector-icon-]:before {
    display: inline-block;
    font-family: icomoon;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    text-align: center;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  .vector-icon-email:before {
    content: "\E945";
  }

  .vector-icon-phone:before {
    content: "\E942";
  }

  .vector-icon-search:before {
    content: "\E986";
  }

  .vector-icon-palette:before {
    content: "\E912"
  }

  .vector-icon-high-quality:before {
    content: "\E913"
  }

  .vector-icon-scissors:before {
    content: "\E914"
  }

  .vector-icon-credit-card:before {
    content: "\E915"
  }

  .vector-icon-camera:before {
    content: "\E916"
  }

  .vector-icon-images:before {
    content: "\E917"
  }

  .vector-icon-truck:before {
    content: "\E918"
  }

  .vector-icon-odnoklassniki:before {
    content: "\E911"
  }

  .vector-icon-angle-down:before {
    content: "\E90A"
  }

  .vector-icon-angle-up:before {
    content: "\E90B"
  }

  .vector-icon-angle-right:before {
    content: "\E90C"
  }

  .vector-icon-angle-left:before {
    content: "\E90D"
  }

  .vector-icon-angle-double-down:before {
    content: "\E90E"
  }

  .vector-icon-angle-double-up:before {
    content: "\E90F"
  }

  .vector-icon-angle-double-right:before {
    content: "\E910"
  }

  .vector-icon-bars:before {
    content: "\E909"
  }

  .vector-icon-viber:before {
    content: "\E919"
  }

  .vector-icon-mts:before {
    content: "\E907";
    padding-right: 5px;
    font-size: .8em
  }

  .vector-icon-velcom:before {
    content: "\E908";
    padding-right: 5px;
    font-size: .8em
  }

  .vector-icon-map-marker:before {
    content: "\E900"
  }

  .vector-icon-google-plus:before {
    content: "\E901"
  }

  .vector-icon-envelope-o:before {
    content: "\E902"
  }

  .vector-icon-vimeo:before {
    content: "\E903"
  }

  .vector-icon-facebook:before {
    content: "\E904"
  }

  .vector-icon-instagram:before {
    content: "\E905"
  }

  .vector-icon-vk:before {
    content: "\E906"
  }
</style>

<story group="Atoms" name="Vector Icon">
  <div>
    <vector-icon icon="email" title="email"/>
    <vector-icon icon="phone" title="phone"/>
    <vector-icon icon="search" title="search"/>
    <vector-icon icon="palette" title="palette"/>
    <vector-icon icon="high-quality" title="high-quality"/>
    <vector-icon icon="scissors" title="scissors"/>
    <vector-icon icon="credit-card" title="credit-card"/>
    <vector-icon icon="camera" title="camera"/>
    <vector-icon icon="images" title="images"/>
    <vector-icon icon="truck" title="truck"/>
    <vector-icon icon="odnoklassniki" title="odnoklassniki"/>
    <vector-icon icon="angle-down" title="angle-down"/>
    <vector-icon icon="angle-up" title="angle-up"/>
    <vector-icon icon="angle-right" title="angle-right"/>
    <vector-icon icon="angle-left" title="angle-left"/>
    <vector-icon icon="angle-double-down" title="angle-double-down"/>
    <vector-icon icon="angle-double-up" title="angle-double-up"/>
    <vector-icon icon="angle-double-right" title="angle-double-right"/>
    <vector-icon icon="bars" title="bars"/>
    <vector-icon icon="viber" title="viber"/>
    <vector-icon icon="mts" title="mts"/>
    <vector-icon icon="velcom" title="velcom"/>
    <vector-icon icon="map-marker" title="map-marker"/>
    <vector-icon icon="google-plus" title="google-plus"/>
    <vector-icon icon="envelope-o" title="envelope-o"/>
    <vector-icon icon="vimeo" title="vimeo"/>
    <vector-icon icon="facebook" title="facebook"/>
    <vector-icon icon="instagram" title="instagram"/>
    <vector-icon icon="vk" title="vk"/>
  </div>
</story>
