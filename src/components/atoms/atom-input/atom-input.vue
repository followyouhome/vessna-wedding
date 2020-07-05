<template>
  <input
    class="atom-input"
    v-model="value"
    :id="id"
    :type="type"
    :title="title"
    :placeholder="placeholder"
    :required="required"
    :disabled="disabled"
    @input="input"
  />
</template>

<script>
  import shortid from 'shortid';

  export default {
    name: 'AtomInput',

    props: {
      /**
       * HTML element id
       */
      id: {
        type: String,
        default: () => shortid.generate(),
      },
      /**
       * Input value
       */
      value: {
        type: String,
        default: '',
      },
      /**
       * HTML input type
       */
      type: {
        type: String,
        default: 'text',
        validator (value) {
          return ['text', 'email'].includes(value);
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
       * HTML element placeholder
       */
      placeholder: {
        type: String,
        default: '',
      },
      /**
       * Make input required
       */
      required: {
        type: Boolean,
      },
      /**
       * Disabled input state
       */
      disabled: {
        type: Boolean,
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
  .atom-input {
    display: block;
    width: 100%;
    height: auto;
    padding: 10px 15px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    box-sizing: border-box;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
</style>
