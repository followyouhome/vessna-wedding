<template>
  <button
    class="atom-button"
    :class="classes"
    :type="type"
    :title="title"
    :disabled="disabled"
    :on="ampOn"
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
      /**
       * AMP event handler
       */
      ampOn: {
        type: String,
        default: undefined,
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
    display: block;
    margin: 4px 0;
    padding: 0 20px;
    align-items:flex-start;
    background: $yellow;
    border: none;
    border-radius: 2px;
    box-sizing:border-box;
    color: $white;
    font: 16px/50px $Default;
    text-align:center;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, transform 0.15s ease-in-out;
    outline-color: $dark3;
    cursor: pointer;

    &:hover {
      background-color: $dark2;
    }

    &:active {
      transform: translateY(1px);
    }

    &:disabled {
      background-color: $dark4;
      cursor: default;
    }

    &--block {
      width: 100%;
    }
  }
</style>
