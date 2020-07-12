 <template>
  <div class="atom-checkbox" :class="classes">
    <input class="atom-checkbox__input" :id="id" type="checkbox" autocomplete="off" value="value" @change="change" :checked="value" :disabled="disabled" :required="required">
    <label class="atom-checkbox__label" :for="id">{{label}}</label>
  </div>
</template>

<script>
  import shortid from 'shortid';

  export default {
    name: 'AtomCheckbox',

    props: {
      /**
       * Text label near checkbox
       */
      label: {
        type: String,
        default: '',
      },
      /**
       * Make field required
       */
      required: {
        type: Boolean,
        default: undefined,
      },
      /**
       * Make button fullwidth
       */
      block: {
        type: Boolean,
      },
      /**
       * Checkbox value
       */
      value: {
        type: Boolean,
        default: false,
      },
      /**
       * Disabled button state
       */
      disabled: {
        type: Boolean,
        default: undefined,
      },
      /**
       * HTML element id
       */
      id: {
        type: String,
        default: () => shortid.generate(),
      },
    },

    model: {
      prop: 'value',
      event: 'input',
    },

    computed: {
      classes () {
        return {
          'atom-checkbox--block': this.block,
        };
      },
    },

    methods: {
      change () {
        this.$emit('input', !this.value);
      },
    },
  };
</script>

<style lang="scss">
  .atom-checkbox {
    display:inline-flex;
    position:relative;
    margin: 0 24px 0 16px;
    min-height:24px;
    padding-left:24px;
    box-sizing:border-box;
    color: $dark;
    font-size: 1rem/1.5 $Default;

    &--block {
      display: flex;
      width: 100%;
    }
  }

  .atom-checkbox__input {
    display:block;
    left: 0;
    margin: 0;
    padding: 0;
    width: 16px;
    height: 20px;
    opacity: 0;
    appearance: checkbox;
    cursor: default;
  }

  .atom-checkbox__label {
    display:block;
    position:relative;
    margin-bottom:0px;
    box-sizing:border-box;
    color:rgb(33, 37, 41);
    cursor:default;
    font: 1rem/1.5 $Default;

    .atom-checkbox__input:checked + &:before {
      background-color: $yellow;
      border-color: $yellow;
    }

    .atom-checkbox__input:disabled + &:before {
      background-color: #e9ecef;
    }

    .atom-checkbox__input:disabled + &:after {
      background-image: none;
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      height: 16px;
      width: 16px;
      left: -24px;
      top: 4px;
      border: 1px solid rgb(201, 180, 134);
      background: $white;
      border: #adb5bd solid 1px;
      border-radius: 4px;
      box-sizing: border-box;
      pointer-events: none;
      transition: ease-in-out 0.15s background-color, border-color, box-shadow;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 16px;
      width: 16px;
      left: -24px;
      top: 4px;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 50% 50%;
      background-clip: border-box;
    }
  }
</style>
