<template>
  <textarea
    class="atom-textarea"
    :placeholder="placeholder"
    wrap="soft"
    :id="id"
    style="resize: none; overflow-y: scroll; height: 94px;"></textarea>
</template>

<script>
  import shortid from 'shortid';

  export default {
    name: 'AtomTextarea',

    props: {
      id: {
        type: String,
        default: () => shortid.generate(),
      },
      placeholder: {
        type: String,
        default: '',
      },
    },

    model: {
      prop: 'value',
      event: 'input',
    },

    methods: {
      input (e) {
        /**
         * Click event
         */
        this.$emit('input', e.target.value);
      },
    },
  };
</script>

<style lang="scss">
  .atom-textarea {
    appearance:none;
    background-clip:padding-box;
    background-color:rgb(255, 255, 255);
    border-bottom-color:rgb(206, 212, 218);
    border-bottom-left-radius:4px;
    border-bottom-right-radius:4px;
    border-bottom-style:solid;
    border-bottom-width:1px;
    border-image-outset:0;
    border-image-repeat:stretch;
    border-image-slice:100%;
    border-image-source:none;
    border-image-width:1;
    border-left-color:rgb(206, 212, 218);
    border-left-style:solid;
    border-left-width:1px;
    border-right-color:rgb(206, 212, 218);
    border-right-style:solid;
    border-right-width:1px;
    border-top-color:rgb(206, 212, 218);
    border-top-left-radius:4px;
    border-top-right-radius:4px;
    border-top-style:solid;
    border-top-width:1px;
    box-sizing:border-box;
    color:rgb(73, 80, 87);
    cursor:text;
    display:block;
    flex-direction:column;
    font-family:-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size:16px;
    font-stretch:100%;
    font-style:normal;
    font-variant-caps:normal;
    font-variant-east-asian:normal;
    font-variant-ligatures:normal;
    font-variant-numeric:normal;
    font-weight:400;
    height:94px;
    letter-spacing:normal;
    line-height:24px;
    margin-bottom:0px;
    margin-left:0px;
    margin-right:0px;
    margin-top:0px;
    overflow-wrap:break-word;
    overflow-x:auto;
    overflow-y:scroll;
    padding-bottom:10px;
    padding-left:15px;
    padding-right:15px;
    padding-top:10px;
    resize:none;
    text-align:start;
    text-indent:0px;
    text-rendering:auto;
    text-shadow:none;
    text-size-adjust:100%;
    text-transform:none;
    transition-delay:0s, 0s;
    transition-duration:0.15s, 0.15s;
    transition-property:border-color, box-shadow;
    transition-timing-function:ease-in-out, ease-in-out;
    white-space:pre-wrap;
    width:784px;
    word-spacing:0px;
    writing-mode:horizontal-tb;
    -webkit-rtl-ordering:logical;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    -webkit-border-image:none;
  }
</style>
