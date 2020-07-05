<template>
  <v-form class="form-user-login" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Вход в личный кабинет</h3>
    </template>
    <template slot='body'>
      <div class="form-login__group">
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.email" type="text" placeholder="Email" required/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.password" type="password" placeholder="Пароль" required/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <captcha-google @init="captchaInit" @success="captchaSuccess" @failure="captchaFailure"/>
          </div>
        </div>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-feedback__control">
        <atom-button class="form__submit" type="submit" :disabled="disabled" :title="title" block label="Войти"/>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from '../form.vue';
  import { AtomButton, AtomInput, AtomCheckbox, AtomSelect, AtomTextarea } from '@/components/atoms';

  const REDIRECTION_TIMEOUT = 3000;

  export default {
    name: 'FormUserLogin',

    extends: Form,

    components: {
      AtomButton,
      AtomInput,
      AtomCheckbox,
      AtomSelect,
      AtomTextarea,
      'v-form': Form,
    },

    data () {
      return {
        action: 'login',
        form: {
          email: '',
          password: '',
        },
        state: {
          checked: null,
          recaptcha: false,
        },
        label: {
          success: 'Вы вошли на сайт',
          failure: 'Неправильный email или пароль',
        },
      };
    },

    methods: {
      success (data) {
        setTimeout(() => {
          if (data.access && data.access.keystone) {
            window.open('/keystone', '_self');
          } else {
            this.$router.push({
              path: '/user/settings',
            });
          }
        }, REDIRECTION_TIMEOUT);
      },
    },
  };
</script>

<style lang="scss">
  .form-user-login {
    margin: 1rem;
    padding: 16px;
    width: 337px;
    border: 1px solid $gray3;

    @media #{$tablet} {
      margin: 1rem auto;
      max-width: 600px;
      width: auto;
      text-align: center;
    }
  }
</style>
