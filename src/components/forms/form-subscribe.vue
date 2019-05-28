<template>
  <v-form @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Подписка на новости</h3>
    </template>
    <template slot='body'>
      <div class="form-subscribe__group">
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.email" type="email" placeholder="E-mail" required autofocus/>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-checkbox v-model="state.checked" class="ml-4" required block>Даю согласие на обработку персональных данных</b-form-checkbox>
          </b-col>
        </b-row>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-subscribe__control">
        <b-button class="form__submit" type="submit" :disabled="disabled" :title="title" block>Отправить</b-button>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from './form';

  export default {
    name: 'FormSubscribe',

    extends: Form,

    components: {
      'v-form': Form,
    },

    data () {
      return {
        action: 'subscribe',
        form: {
          email: '',
        },
        state: {
          checked: false,
          recaptcha: null,
        },
        label: {
          success: 'Подписка оформлена',
          failure: 'Ошибка сервера',
        },
      };
    },

    methods: {
      success () {
        setTimeout(() => {
          this.$emit('success');
        }, 3000);
      },

      failure () {
        setTimeout(() => {
          this.$emit('failure');
        }, 3000);
      },
    },
  };
</script>

<style lang="scss">
  .form-subscribe__group {

  }

  .form-subscribe__control {

  }
</style>

<story group="Forms" name="Subscribe">
  <form-subscribe/>
</story>
