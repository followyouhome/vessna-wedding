<template>
  <select
    class="atom-select"
    :value="value"
    :class="classes"
    :id="id"
    :name="name"
    @change="change"
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
       * Field name
       */
      name: {
        type: String,
        detault: '',
      },
      /**
       * List of select options
       */
      options: {
        type: Array,
        default: () => [],
      },
      /**
       * Make select fullwidth
       */
      block: {
        type: Boolean,
        default: undefined,
      },
      value: {
        type: [Object, String, Boolean, Number],
        default: undefined,
      },
    },

    model: {
      prop: 'value',
      event: 'input',
    },

    computed: {
      classes () {
        return {
          'atom-select--block': this.block,
        };
      },

      parsedOptions () {
        return this.options.map(option => typeof option === 'string' ? { label: option, value: option } : option);
      },
    },

    methods: {
      change (event) {
        this.$emit('input', event.target.value);
      },
    },
  };
</script>

<style lang="scss">
  .atom-select {
    display:inline-block;
    padding: 10px 15px;
    margin: 0;
    height: 46px;
    box-sizing:border-box;
    border-radius: 4px;
    border: 1px solid $gray3;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e");
    background-position: calc(100% - 12px) 50%;
    background-repeat: no-repeat;
    background-size:8px 10px;
    appearance:none;
    font: 1rem/1.5 $Default;
    color: $dark;

    &--block {
      display: block;
      width: 100%;
    }
  }
</style>
