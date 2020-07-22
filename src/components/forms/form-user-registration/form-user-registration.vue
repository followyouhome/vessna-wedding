<template>
  <v-form class="form-user-login" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Регистрация</h3>
    </template>
    <template slot='body'>
      <div class="form-user-registration__group">
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.name" name="name" type="text" placeholder="Имя" required/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.email" name="email" type="email" placeholder="Email" required/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.password" name="password" type="password" placeholder="Пароль" required/>
          </div>
        </div>
      </div>
      <div class="form__group">
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.info.city" name="info.city" type="text" placeholder="Город" required/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.info.shop" name="info.shop" type="text" placeholder="Магазин" required/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.info.phone" name="info.phone" type="text" placeholder="Телефон" required/>
          </div>
        </div>
      </div>
      <div class="form__group">
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.invite" name="invite" type="text" placeholder="Инвайт" required/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-checkbox v-model="form.access.subscription" name="access.subscription" class="ml-4" label="Подписаться на рассылку"/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-checkbox v-model="state.checked" name="checked" class="ml-4" :required="true" label="Согласие с пользовательским соглашением"/>
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
        <atom-button class="form__submit" type="submit" label="Зарегистрироваться" :disabled="disabled" :title="title" block/>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from '../form.vue';
  import { AtomButton, AtomInput, AtomCheckbox, AtomSelect, AtomTextarea } from '@/components/atoms';

  const REDIRECTION_TIMEOUT = 3000;

  export default {
    name: 'FormUserRegistration',

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
        recaptcha: true,
        action: '/api/user/registration',
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
          recaptcha: false,
        },
        label: {
          success: 'Вы зарегистрированы',
          failure: 'Ошибка сервера',
        },
      };
    },

    methods: {
      success ({ data }) {
        this.$store.commit(USER_LOGIN, data);

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
