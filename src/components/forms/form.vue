<template>

</template>

<script>
  export default {
    name: 'form',

    data () {
      return {
        state: {
          request: false,
          recaptcha: false,
        },
      };
    },

    methods: {
      submit () {
        this.state.request = true;

        return new Promise((resolve, reject) => {
          this.$store.dispatch('login', this.form).then((data) => {
            this.status.success = true;
            // setTimeout(() => { this.status.available = false; }, this.config.animation);
            // setTimeout(() => { this.$store.commit('POPUP_UNSET'); }, this.config.animation * 2);
            resolse();
          }).catch((err) => {
            this.status.fail = true;

            reject();
          }).finnaly(() => {
            this.state.request = false;
          });
        })
      },
    },

    provide: {
      foo: 'bar'
    }
  };
</script>

<style lang="scss">
  .form {
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
</style>
