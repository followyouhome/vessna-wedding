 <template>
  <div class="atom-checkbox">
    <input class="atom-checkbox__input" :id="id" type="checkbox" autocomplete="off" value="value" @change="change" :checked="value">
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
       * Checkbox value
       */
      value: {
        type: Boolean,
        default: false,
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

    methods: {
      change () {
        console.log('CHANGE');
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
    box-sizing:border-box;
    color:rgb(33, 37, 41);
    font-size:16px;
    font-weight:400;
    line-height:24px;
    min-height:24px;
    padding-left:24px;
    text-align:left;
    text-size-adjust:100%;
  }

  .atom-checkbox__input {
    appearance:checkbox;
    background-color:rgba(0, 0, 0, 0);
    border: none;
    box-sizing:border-box;
    color:rgb(0, 0, 0);
    cursor:default;
    display:block;
    font-family:-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size:16px;
    font-stretch:100%;
    font-style:normal;
    font-variant-caps:normal;
    font-variant-east-asian:normal;
    font-variant-ligatures:normal;
    font-variant-numeric:normal;
    font-weight:400;
    height:20px;
    left:0px;
    letter-spacing:normal;
    line-height:24px;
    margin: 0;
    padding: 0;
    opacity:0;
    overflow-x:visible;
    overflow-y:visible;
    position:absolute;
    text-align:start;
    text-indent:0px;
    text-rendering:auto;
    text-shadow:none;
    text-size-adjust:100%;
    text-transform:none;
    width:16px;
    word-spacing:0px;
    writing-mode:horizontal-tb;
    z-index:-1;
  }

  .atom-checkbox__label {
    box-sizing:border-box;
    color:rgb(33, 37, 41);
    cursor:default;
    display:block;
    font-family: $Default;
    font-size:16px;
    font-weight:400;
    line-height:24px;
    margin-bottom:0px;
    position:relative;
    text-align:left;
    text-size-adjust:100%;

    .atom-checkbox__input:checked + &:before {
      background-color: $yellow;
      border-color: $yellow;
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
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 50% 50%;
      background-clip: border-box;
    }
  }
</style>
