<template>

</template>

<script>
  export default {
    name: 'Module',
  };
</script>

<style lang="scss">
  .module__text-title {
    margin: 0;
    font: 31px/50px Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    color: #c5b38d
  }

  @media screen and (max-width:1023px) {
    .module__text-title {
        font-size: 1.5rem;
        line-height: 1.5em
    }
  }

  @media screen and (max-width:767px) {
    .module__text-title {
        font-size: 1.3rem;
        line-height: 1.3em;
        text-align: center
    }
  }

  @media screen and (max-width:480px) {
    .module__text-title {
        margin-bottom: 10px;
        font-size: 1.2rem;
        line-height: 1.2em;
        text-align: center
    }
  }

  .module__text-headline {
    margin: 0;
    font: 18px/1.4em Segoe UI Black, Helvetica, Arial, sans-serif;
    text-transform: none;
    color: #333
  }

  @media screen and (max-width:480px) {
    .module__text-headline {
        margin: 10px 0;
        font-size: 1.5rem;
        line-height: 2rem
    }
  }

  .module__text-subheadline {
    margin: 0;
    font: 18px/1.4em Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    color: #333
  }

  .module__text-content {
    font: 14px/24px Lato, Helvetica, Arial, sans-serif;
    text-transform: none;
    color: #515151
  }

  @media screen and (max-width:1023px) {
    .module__text-content {
        font-size: 1.1rem;
        line-height: 1.5rem
    }
  }

  @media screen and (max-width:767px) {
    .module__text-content {
        font-size: 1rem;
        text-align: justify
    }
  }

  @media screen and (max-width:480px) {
    .module__text-content {
        font-size: .9rem;
        line-height: 1.5rem
    }
  }

  .module__text-link {
    font: 14px/24px Lato, Helvetica, Arial, sans-serif;
    text-transform: none;
    color: #515151;
    display: inline-block;
    color: #1e1e1e;
    text-decoration: underline;
    -webkit-transition: -webkit-transform .1s linear;
    transition: -webkit-transform .1s linear;
    transition: transform .1s linear;
    transition: transform .1s linear, -webkit-transform .1s linear
  }

  @media screen and (max-width:1023px) {
    .module__text-link {
        font-size: 1.1rem;
        line-height: 1.5rem
    }
  }

  @media screen and (max-width:767px) {
    .module__text-link {
        font-size: 1rem;
        text-align: justify
    }
  }

  @media screen and (max-width:480px) {
    .module__text-link {
        font-size: .9rem;
        line-height: 1.5rem
    }
  }

  .module__text-link:focus,
  .module__text-link:hover {
    outline: none
  }

  .module__text-link:active {
    -webkit-transform: translateY(2px);
    transform: translateY(2px)
  }

  .module__text-button-link {
    display: inline-block;
    padding: 4px 6px 6px;
    border: 1px solid #e6e6e6;
    border-radius: 1px;
    vertical-align: middle;
    font: 16px/1em Futura PT Light, Segoe UI Light, Helvetica, Arial, sans-serif;
    text-decoration: none;
    text-transform: lowercase;
    text-shadow: 0 1px 1px #fff;
    background: #f2f2f2;
    color: #333;
    -webkit-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out
  }

  .module__text-button-link:hover {
    text-decoration: none;
    text-shadow: none;
    background: #777;
    color: #fff
  }

  .module__text-button-link.icon {
    position: relative;
    margin: 0 3px;
    width: 30px;
    text-indent: -9999px
  }

  .module__text-button-link.icon:before {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    text-indent: 0
  }

  .module__text-icon--bordered {
    display: inline-block;
    position: relative;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    border-radius: 80px;
    border: 2px solid #a2a2a2;
    text-align: center;
    line-height: 35px;
    color: #a2a2a2;
    -webkit-transition: all .1s ease-in-out;
    transition: all .1s ease-in-out
  }

  .module__text-icon--bordered:hover {
    color: #c9b486;
    border-color: #c9b486
  }

  .module__text-icon--bordered:before {
    display: inline-block;
    line-height: 40px
  }
</style>
