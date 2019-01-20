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
      submit () {
        this.request = true;

        return new Promise((resolve, reject) => {
          this.$store.dispatch(this.action, this.form).then((data) => {
            this.success = true;
            this.request = false;
            resolve(data);
          }).catch((err) => {
            this.fail = true;
            this.request = false;
            reject(err);
          });
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
