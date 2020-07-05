<template>
  <button
    class="atom-button"
    :class="classes"
    :type="type"
    :title="title"
    :block="block"
    :disabled="disabled"
    @click="click"
  >
    {{label}}
  </button>
</template>

<script>
  import shortid from 'shortid';

  export default {
    name: 'AtomButton',

    props: {
      /**
       * HTML element id
       */
      id: {
        type: String,
        default: () => shortid.generate(),
      },
      /**
       * HTML button type
       */
      type: {
        type: String,
        default: 'button',
        validator (value) {
          return ['button', 'submit'].includes(value);
        },
      },
      /**
       * HTML title highlight
       */
      title: {
        type: String,
        default: '',
      },
      /**
       * Text inside button
       */
      label: {
        type: String,
        default: '',
      },
      /**
       * Make button fullwidth
       */
      block: {
        type: Boolean,
      },
      /**
       * Disabled button state
       */
      disabled: {
        type: Boolean,
      },
    },

    computed: {
      classes () {
        return {
          'atom-button--block': this.block,
        };
      },
    },

    methods: {
      click () {
        /**
         * Click event
         */
        this.$emit('click');
      },
    },
  };
</script>

<style lang="scss">
  .atom-button {
    display:block;
    margin: 4px 0;
    padding: 0 20px;
    align-items:flex-start;
    background: #c9b486;
    border: none;
    border-radius: 2px;
    box-sizing:border-box;
    cursor: pointer;
    color: $white;
    font: 16px/50px $Default;
    letter-spacing:normal;
    opacity:0.65;
    text-align:center;
    transition: color, background-color 0.15s ease-in-out;

    &:disabled {
      background-color:rgb(108, 117, 125);
      cursor:default;
    }

    &--block {
      width: 100%;
    }
  }
</style>
