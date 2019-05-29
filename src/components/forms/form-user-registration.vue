<template>
  <v-form class="form-user-login" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Регистрация</h3>
    </template>
    <template slot='body'>
      <div class="form-user-registration__group">
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.name" type="text" placeholder="Имя" required/>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.email" type="email" placeholder="Email" required/>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.password" type="password" placeholder="Пароль" required/>
          </b-col>
        </b-row>
      </div>
      <div class="form__group">
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.info.city" type="text" placeholder="Город" required/>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.info.shop" type="text" placeholder="Магазин" required/>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.info.phone" type="text" placeholder="Телефон" required/>
          </b-col>
        </b-row>
      </div>
      <div class="form__group">
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.invite" type="text" placeholder="Инвайт" required/>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-checkbox v-model="form.access.subscription" class="ml-4" inline>Подписаться на рассылку</b-form-checkbox>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-checkbox v-model="state.checked" class="ml-4" required inline>Согласие с пользовательским соглашением</b-form-checkbox>
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
        <b-button class="form__submit" type="submit" :disabled="disabled" :title="title" block>Зарегистрироваться</b-button>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from './form.vue';

  const REDIRECTION_TIMEOUT = 3000;

  export default {
    name: 'FormUserRegistration',

    extends: Form,

    components: {
      'v-form': Form,
    },

    data () {
      return {
        recaptcha: true,
        action: 'registration',
        confirmPassord: '',
        form: {
          name: '',
          email: '',
          password: '',
          info: {
            shop: '',
            city: '',
            phone: '',
          },
          access: {
            subscription: '',
          },
        },
        state: {
          checked: false,
          recaptcha: true,
        },
        label: {
          success: 'Вы зарегистрированы',
          failure: 'Ошибка сервера',
        },
      };
    },

    methods: {
      success (data) {
        setTimeout(() => {
          this.$router.push({
            path: '/user/settings',
          });
        }, REDIRECTION_TIMEOUT);
      },
    },
  };
</script>

<style lang="scss">
  .form-user-login {
    margin: 1rem;
    padding: 1rem;
    width: 350px;
    border: 1px solid $gray3;

    @media #{$phablet} {
      margin: 1rem auto;
      width: 90%;
    }
  }
</style>

<story group="Forms" name="User Registration">
  <form-user-registration/>
</story>
