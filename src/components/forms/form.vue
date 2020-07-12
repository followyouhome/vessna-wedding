<template>
  <form class="form" :class="formModifier" @submit.prevent="submit" method="post" :action-xhr="$parent.action" target="_blank">
    <slot name='header'>

    </slot>
    <slot name='body'>

    </slot>
    <slot name='footer'>

    </slot>
    <slot name="modal">
      <div class="form__modal" v-show="state.request">
        <atom-spinner/>
      </div>
      <div class="form__modal form__modal--success" v-show="amp || state.success" submit-success>
        <h4 class="form__subline">{{label.success}}</h4>
      </div>
      <div class="form__modal form__modal--failure" v-show="amp || state.failure" submit-error>
        <h4 class="form__subline">{{label.failure}}</h4>
      </div>
    </slot>
  </form>
</template>

<script>
  import axios from 'axios';
  import { AtomSpinner } from '@/components/atoms';

  const MODAL_TIMEOUT = 3000;

  export default {
    name: 'v-form',

    components: {
      AtomSpinner,
    },

    data () {
      return {
        form: null,
        state: {
          request: false,
          success: false,
          failure: false,
          checked: false,
          recaptcha: null,
        },
        label: {
          success: this.$parent.label && this.$parent.label.success || 'Форма отправлена',
          failure: this.$parent.label && this.$parent.label.failure || 'Ошибка отправки',
        },
      };
    },

    computed: {
      disabled () {
        return !this.amp && ((typeof this.state.checked === 'boolean' ? !this.state.checked : false)
          || (typeof this.state.recaptcha === 'boolean' ? !this.state.recaptcha : false));
      },

      title () {
        if (typeof this.state.recaptcha === 'boolean' && !this.state.recaptcha) {
          return 'Подтвердите, что вы не робот.';
        } else if (typeof this.state.checked === 'boolean' && !this.state.checked) {
          return 'Подтвердите согласие на отправку персональных данных.';
        }

        return 'Отправить запрос.';
      },

      formModifier () {
        if (this.state.success) {
          return 'form--success';
        } else if (this.state.failure) {
          return 'form--failure';
        }

        return '';
      },

      amp () {
        return this.$store && this.$store.state && this.$store.state.settings && this.$store.state.settings.amp;
      },
    },

    methods: {
      success (data) {
        this.$emit('success', data);
      },

      failure (err) {
        this.$emit('failure', err);
      },

      captchaInit () {
        this.state.recaptcha = false;
      },

      captchaSuccess () {
        this.state.recaptcha = true;
      },

      captchaFailure () {
        this.state.recaptcha = false;
      },

      submit () {
        this.state.request = true;
        this.$parent.$emit('submit', this.$parent.form);

        return axios.post(this.$parent.action, this.$parent.form)
          .then(response => {
            this.state.success = true;
            this.state.request = false;
            this.success(response);
          })
          .catch(error => {
            this.state.failure = true;
            this.state.request = false;
            this.failure(error);
          })
          .finally(() => {
            setTimeout(() => {
                this.state.failure = false;
            }, MODAL_TIMEOUT);
          });
      },
    },
  };
</script>

<style lang="scss">
  @include animation-slit-in-vertical();

  .form {
    position: relative;
    transition: border-color linear 0.2s;

    &.form--success {
      border-color: green;
    }

    &.form--failure {
      border-color: red;
    }

    .form-control,
    .custom-select {
      height: auto;
      padding: 10px 15px;
    }

    .custom-control-input:checked ~ .custom-control-label:before {
      border-color: $yellow;
      background-color: $yellow;
    }

    .custom-control-input:focus ~ .custom-control-label:before {
      box-shadow: 0 0 0 0.2rem opacify($yellow, 0.5);
    }

    .form-control {
      &:focus {
        border-color: $yellow;
        box-shadow: 0 0 0 0.2rem opacify($yellow, 0.3);
      }
    }
  }

  .form__modal {
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: $glass3;

    &--success {
      border: 1px solid $green;
      animation: animation-slit-in-vertical 0.45s ease-out both;
    }

    &--failure {
      border: 1px solid $red;
      animation: animation-slit-in-vertical 0.45s ease-out both;
    }

    & .form__subline {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
    }
  }

  .form__submit {
    height: 50px;
    padding: 0 20px;
    min-width: 180px;
    border: none;
    border-radius: 2px;
    background: $yellow;
    color: $white;
    line-height: 50px;

    &:hover {

    }

    &:active {

    }
  }

  .form__label {
    font-family: $Default;
    margin-bottom: 0;
  }

  .form__headline {
    margin: 0px 0 20px;
    font: 2rem/2rem $RistrettoProLight;
    text-align: center;
  }

  .form__subline {
    margin: 0px 0 20px;
    font: 1.5rem/1.5rem $RistrettoProLight;
    text-align: center;
  }

  // @keyframes fail {
  //   0%   { transform: translateX(0);}
  //   12%   { transform: translateX(-3px);}
  //   25%   { transform: translateX(0);}
  //   37%   { transform: translateX(3px);}
  //   50%   { transform: translateX(0);}
  //   62%   { transform: translateX(-3px);}
  //   75%   { transform: translateX(0);}
  //   87%   { transform: translateX(3px);}
  //   100% { transform: translateX(0); }
  // }
  //
  // @keyframes request {
  //   0% { opacity: 1; }
  //   50% { opacity: 0.5; }
  //   100% { opacity: 1; }
  // }
  //
  // .form {
  //   box-sizing: border-box;
  //
  //   &--row {
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     flex-direction: row;
  //   }
  //
  //   &--column {
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     flex-direction: column;
  //   }
  // }
  //
  // .form__row {
  //   position: relative;
  //   width: 100%;
  //
  //   & > * {
  //     width: 100%;
  //   }
  // }

  // .form__divider {
  //   width: 100%;
  //   height: 1px;
  //   border: none;
  //   background: $gray3;
  // }
  //
  // .form__input-text {
  //   padding: 0 10px;
  //   margin: 10px 0;
  //   height: 30px;
  //   box-sizing: border-box;
  //   resize: none;
  //   border: 1px solid #e5e5e5;
  //   border-radius: 1px;
  //   box-shadow: inset 0 1px 2px rgba(0, 0, 0, .04);
  //   background: #fff;
  //   font-size: 12px;
  //   line-height: 16px;
  //
  //   &:focus {
  //     box-shadow: inset 0 1px 2px rgba(0, 0, 0, .08);
  //     background: #f8f8f8;
  //     border: 1px solid #e5e5e5;
  //     outline: 0
  //   }
  // }
  //
  // .form__input-checkbox {
  //   position: absolute;
  //   margin: auto;
  //   width: auto;
  //   top: 0;
  //   left: 0;
  //   bottom: 0;
  //
  //   & ~ * {
  //     margin-left: 25px;
  //   }
  // }
  //
  // .from__input-selection {
  //
  // }
  //
  // .form__input-label {
  //   display: block;
  // }
  //
  // .form__button-submit {
  //   width: 100%;
  //   margin-top: 10px;
  //   transition: background linear 0.2s, transform linear 0.1s;
  //
  //   &:active {
  //     transform: translateY(2px);
  //   }
  //
  //   &:focus {
  //     outline: none;
  //   }
  //
  //   &:disabled {
  //     cursor: default;
  //     cursor: not-allowed;
  //     opacity: 0.5;
  //
  //     &:hover {
  //       background: inherit;
  //       color: inherit;
  //     }
  //   }
  //
  //   &.request {
  //     animation: request 1s infinite;
  //   }
  //
  //   &.success {
  //     background: $green;
  //     color: $white;
  //
  //     &:hover {
  //       opacity: 0.9;
  //       background: $green;
  //       color: $white;
  //     }
  //   }
  //
  //   &.fail {
  //     animation: fail 0.3s 1;
  //     background: $red;
  //     color: $white;
  //
  //     &:hover {
  //       opacity: 0.9;
  //       background: $red;
  //       color: $white;
  //     }
  //   }
  // }
</style>
