<template>
  <v-form class="form-user-login" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Вход в личный кабинет</h3>
    </template>
    <template slot='body'>
      <div class="form-login__group">
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.email" type="text" placeholder="Email" />
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.password" type="password" placeholder="Пароль" />
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <captcha-google v-on:success="captcha"/>
          </b-col>
        </b-row>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-feedback__control">
        <b-button class="form__submit" type="submit" :disabled="disabled" block>Войти</b-button>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from './index.vue';

  export default {
    name: 'FormUserLogin',

    extends: Form,

    components: {
      'v-form': Form,
    },

    data () {
      return {
        action: 'login',
        form: {
          email: '',
          password: '',
        },
      };
    },
  };
</script>

<style lang="scss">
  .form-user-login {
    margin: 1rem;
    padding: 16px;
    width: 337px !important;
    border: 1px solid $gray3;

    @media #{$tablet} {
      margin: 1rem auto;
      max-width: 600px;
      width: auto;
      text-align: center;
    }
  }
</style>

<story group="Forms" name="User Login">
  <form-user-login/>
</story>
