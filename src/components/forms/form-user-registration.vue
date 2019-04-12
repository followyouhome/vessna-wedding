<template>
  <v-form class="form-user-login" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Регистрация</h3>
    </template>
    <template slot='body'>
      <div class="form-user-registration__group">
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.name" type="name" placeholder="Имя"/>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.email" type="email" placeholder="Email"/>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.password" type="password" placeholder="Пароль"/>
          </b-col>
        </b-row>
      </div>
      <div class="form-user-registration__group">
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.infoюcity" type="text" placeholder="Город"/>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.info.shop" type="text" placeholder="Магазин"/>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.info.phone" type="text" placeholder="Телефон"/>
          </b-col>
        </b-row>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-feedback__control">
        <b-button class="form__submit" type="submit" :disabled="disabled" block>Зарегистрироваться</b-button>
      </div>
    </template>
  </v-form>
  <!--<form class="form form-user-login form--column" v-on:submit.prevent="submit">


    <hr class="form__divider"/>
    <div class="form__row">
      <input class="form__input-text" v-model="form.promocode" type="phone" placeholder="Промокод">
    </div>
    <div class="form__row">
      <input class="form__input-checkbox" v-model="form.access.subscription" type="checkbox">
      <label class="form__input-label">Подписаться на рассылку</label>
    </div>
    <div class="form__row">
      <input class="form__input-checkbox" v-model="form.agreement" type="checkbox" required>
      <label class="form__input-label">Согласие с пользовательским соглашением</label>
    </div>
    <hr class="form__divider"/>
    <div class="form__row">
      <captcha-google v-on:success="captcha"/>
    </div>
    <div class="form__row">
      <input type="submit" value="Зарегистрироваться"
        :disabled="!recaptcha"
        :title="!recaptcha ? 'Заполните все поля' : 'Нажмите, чтобы зарегистрироваться'"
        :class="[
          'form__button-submit',
          request ? 'request' : '',
          success ? 'success' : '',
          fail ? 'fail' : '',
        ]"
      />
    </div>
  </form>-->
</template>

<script>
  import Form from './index.vue';

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
      };
    },

    computed: {

    },

    methods: {

    },
  };
</script>

<style lang="scss">
  .form-user-login {
    margin: 1rem;
    padding: 1rem;
    width: 350px;
    border: 1px solid $gray3;
  }
</style>

<story group="Forms" name="User Registration">
  <form-user-registration/>
</story>
