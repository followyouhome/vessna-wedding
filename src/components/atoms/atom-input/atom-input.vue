<template>
  <input
    class="atom-input"
    v-model="model"
    :id="id"
    :name="name"
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
       * Field name
       */
      name: {
        type: String,
        detault: '',
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
          return ['text', 'email', 'password'].includes(value);
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

    data () {
      return {
        model: this.value,
      };
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
    font: 1rem/1.5 $Default;
    color: $dark;
    box-sizing: border-box;
    background-color: $white;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    outline-color: $dark3;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:disabled {
      background-color: $gray1;
    }
  }
</style>
