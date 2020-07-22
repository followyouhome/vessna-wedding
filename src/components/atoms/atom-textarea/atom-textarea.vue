<template>
  <textarea
    class="atom-textarea"
    :class="classes"
    :placeholder="placeholder"
    wrap="soft"
    :id="id"
    :name="name"
    @input="input"
  />
</template>

<script>
  import shortid from 'shortid';

  export default {
    name: 'AtomTextarea',

    props: {
      /**
       * HTML element id
       */
      id: {
        type: String,
        default: () => shortid.generate(),
      },
      /**
       * Field name
       */
      name: {
        type: String,
        detault: '',
      },
      placeholder: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: '',
      },
      /**
       * Make button fullwidth
       */
      block: {
        type: Boolean,
      },
    },

    model: {
      prop: 'value',
      event: 'input',
    },

    computed: {
      classes () {
        return {
          'atom-textarea--block': this.block,
        };
      },
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
    display: block;
    margin: 0;
    padding: 10px 15px;
    min-height: 100px;
    overflow-y:scroll;
    appearance:none;
    border: 1px solid $gray1;
    border-radius: 4px;
    background-color: $white;
    box-sizing:border-box;
    color: $dark;
    cursor:text;
    font: 1rem/1.5 $Default;
    outline-color: $dark3;

    &--block {
      width: 100%;;
    }
  }
</style>
