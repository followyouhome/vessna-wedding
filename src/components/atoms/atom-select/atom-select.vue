<template>
  <select
    class="atom-select"
    :id="id"
  >
    <slot name="first"></slot>
    <option
      v-for="option in parsedOptions"
      :key="option.label"
      :value="option.value"
      :disabled="option.disabled"
    >
      {{option.label}}
    </option>
  </select>
</template>

<script>
  import shortid from 'shortid';

  export default {
    name: 'AtomSelect',

    props: {
      /**
       * HTML element id
       */
      id: {
        type: String,
        default: () => shortid.generate(),
      },
      /**
       * List of select options
       */
      options: {
        type: Array,
        default: () => [],
      },
    },

    computed: {
      parsedOptions () {
        return this.options && this.options.map && this.options.map(option => typeof option === 'string' ? { label: option, value: option } : option);
      },
    },
  };
</script>

<style lang="scss">
  .atom-select {
    align-items:center;
    appearance:none;
    background-attachment:scroll;
    background-clip:border-box;
    background-color:rgb(255, 255, 255);
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e");
    background-origin:padding-box;
    background-position-x:calc(100% - 12px);
    background-position-y:50%;
    background-repeat: no-repeat;
    background-size:8px 10px;
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
    cursor:default;
    display:inline-block;
    font-family:-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size:16px;
    font-stretch:100%;
    font-style:normal;
    font-variant-caps:normal;
    font-variant-east-asian:normal;
    font-variant-ligatures:normal;
    font-variant-numeric:normal;
    font-weight:400;
    height:46px;
    letter-spacing:normal;
    line-height:24px;
    margin-bottom:0px;
    margin-left:0px;
    margin-right:0px;
    margin-top:0px;
    overflow-wrap:normal;
    overflow-x:visible;
    overflow-y:visible;
    padding-bottom:10px;
    padding-left:15px;
    padding-right:15px;
    padding-top:10px;
    text-align:start;
    text-indent:0px;
    text-rendering:auto;
    text-shadow:none;
    text-size-adjust:100%;
    text-transform:none;
    transition-delay:0s, 0s, 0s;
    transition-duration:0.15s, 0.15s, 0.15s;
    transition-property:background-color, border-color, box-shadow;
    transition-timing-function:ease-in-out, ease-in-out, ease-in-out;
    vertical-align:middle;
    white-space:pre;
    width:784px;
    word-spacing:0px;
    writing-mode:horizontal-tb;
    -webkit-rtl-ordering:logical;
    -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    -webkit-border-image:none;
  }
</style>
