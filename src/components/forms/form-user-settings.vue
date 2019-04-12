<template>
  <v-form class="form-user-settings" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Настройки</h3>
    </template>
    <template slot='body'>
      <div class="form-cooperation__group">
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-select v-model="form.access.currency" :options="currencies">
              <template slot="first">
                <option :value="null" disabled>Выберите валюту</option>
              </template>
            </b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <captcha-google @init="captchaInit" @success="captchaSuccess" @failure="captchaFailure"/>
          </b-col>
        </b-row>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-feedback__control">
        <b-button class="form__submit" type="submit" :disabled="disabled" block>Сохранить</b-button>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from './index.vue';

  export default {
    name: 'FormUserSettings',

    extends: Form,

    components: {
      'v-form': Form,
    },

    data () {
      return {
        recaptcha: true,
        action: 'settings',
        form: {
          access: {
            currency: this.$store && this.$store.state && this.$store.state.user && this.$store.state.user.access && this.$store.state.user.access.currency,
          },
        },
        currencies: [
          'USD',
          'RUB',
        ],
      };
    },

    computed: {
      currency () {
        return this.$store.state.user && this.$store.state.user.access && this.$store.state.user.access.currency;
      },
    },
  };
</script>

<style lang="scss">
  .form-user-settings {
    margin: 1rem;
    padding: 1rem;
    width: 350px;
    border: 1px solid $gray3;
  }
</style>

<story group="Forms" name="User Settings">
  <form-user-settings/>
</story>
