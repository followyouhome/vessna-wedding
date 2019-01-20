<template>

</template>

<script>
  export default {
    name: 'form',

    data () {
      return {
        fail: false,
        success: false,
        request: false,
        recaptcha: false,
      };
    },

    methods: {
      captcha () {
        this.recaptcha = true;
      },

      submit () {
        this.request = true;

        return this.$store.dispatch(this.action, this.form).then((data) => {
          this.success = true;
          this.request = false;

          return Promise.resolve(data);
        }).catch((err) => {
          this.fail = true;
          this.request = false;

          return Promise.reject(err);
        });
      },
    },
  };
</script>

<style lang="scss">
  @keyframes fail {
    0%   { transform: translateX(0);}
    12%   { transform: translateX(-3px);}
    25%   { transform: translateX(0);}
    37%   { transform: translateX(3px);}
    50%   { transform: translateX(0);}
    62%   { transform: translateX(-3px);}
    75%   { transform: translateX(0);}
    87%   { transform: translateX(3px);}
    100% { transform: translateX(0); }
  }

  @keyframes request {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  .form {
    box-sizing: border-box;

    &--row {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }

    &--column {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  .form__row {
    position: relative;
    width: 100%;

    & > * {
      width: 100%;
    }
  }

  .form__divider {
    width: 100%;
    height: 1px;
    border: none;
    background: $gray3;
  }

  .form__input-text {
    padding: 0 10px;
    margin: 10px 0;
    height: 30px;
    box-sizing: border-box;
    resize: none;
    border: 1px solid #e5e5e5;
    border-radius: 1px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .04);
    background: #fff;
    font-size: 12px;
    line-height: 16px;

    &:focus {
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, .08);
      background: #f8f8f8;
      border: 1px solid #e5e5e5;
      outline: 0
    }
  }

  .form__input-checkbox {
    position: absolute;
    margin: auto;
    width: auto;
    top: 0;
    left: 0;
    bottom: 0;

    & ~ * {
      margin-left: 25px;
    }
  }

  .form__input-label {
    display: block;
  }

  .form__button-submit {
    width: 100%;
    margin-top: 10px;
    transition: background linear 0.2s, transform linear 0.1s;

    &:active {
      transform: translateY(2px);
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      cursor: default;
      cursor: not-allowed;
      opacity: 0.5;

      &:hover {
        background: inherit;
        color: inherit;
      }
    }

    &.request {
      animation: request 1s infinite;
    }

    &.success {
      background: $green;
      color: $white;

      &:hover {
        opacity: 0.9;
        background: $green;
        color: $white;
      }
    }

    &.fail {
      animation: fail 0.3s 1;
      background: $red;
      color: $white;

      &:hover {
        opacity: 0.9;
        background: $red;
        color: $white;
      }
    }
  }
</style>
