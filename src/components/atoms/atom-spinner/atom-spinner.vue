<template>
  <span class="atom-spinner"></span>
</template>

<script>
  export default {
    name: 'AtomSpinner',
  };
</script>

<style lang="scss">
  @keyframes spinner-border {
      to {
          transform: rotate(1turn)
      }
  }

  .atom-spinner {
    animation-delay:0s;
    animation-direction:normal;
    animation-duration:0.75s;
    animation-fill-mode:none;
    animation-iteration-count:infinite;
    animation-name:spinner-border;
    animation-play-state:running;
    animation-timing-function:linear;
    border-bottom-color:rgb(33, 37, 41);
    border-bottom-left-radius:50%;
    border-bottom-right-radius:50%;
    border-bottom-style:solid;
    border-bottom-width:4px;
    border-image-outset:0;
    border-image-repeat:stretch;
    border-image-slice:100%;
    border-image-source:none;
    border-image-width:1;
    border-left-color:rgb(33, 37, 41);
    border-left-style:solid;
    border-left-width:4px;
    border-right-color:rgba(0, 0, 0, 0);
    border-right-style:solid;
    border-right-width:4px;
    border-top-color:rgb(33, 37, 41);
    border-top-left-radius:50%;
    border-top-right-radius:50%;
    border-top-style:solid;
    border-top-width:4px;
    box-sizing:border-box;
    color:rgb(33, 37, 41);
    display:inline-block;
    font-family:-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size:16px;
    font-weight:400;
    height:32px;
    line-height:24px;
    text-align:center;
    text-size-adjust:100%;
    vertical-align:text-bottom;
    width:32px;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
  }
</style>
