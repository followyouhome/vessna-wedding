<template>
  <v-form class="form-user-login" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Выход из личного кабинета</h3>
    </template>
    <template slot='body'>
      <div class="form-login__group">
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-input class="form__input-text" v-model="form.email || user" name="email" type="text" placeholder="Email" disabled/>
          </div>
        </div>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-feedback__control">
        <atom-button class="form__submit" type="submit" block label="Выйти"/>
      </div>
    </template>
  </v-form>
</template>

<script>
  import { USER_LOGOUT } from '@/store/mutation-types.js';
  import Form from '@/components/forms/form.vue';
  import { AtomButton, AtomInput, AtomCheckbox, AtomSelect, AtomTextarea } from '@/components/atoms';

  const REDIRECTION_TIMEOUT = 3000;

  export default {
    name: 'FormUserLogout',

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
        action: '/api/user/logout',
        form: {
          email: '',
        },
        label: {
          success: 'Вы успешно вышли',
          failure: 'Ошибка сервера',
        },
      };
    },

    computed: {
      user () {
        return this.$store && this.$store.state && this.$store.state.user && this.$store.state.user.email;
      },
    },

    methods: {
      success (data) {
        this.$store.commit(USER_LOGOUT);

        setTimeout(() => {
          this.$router.push({
            path: '/',
          });
        }, REDIRECTION_TIMEOUT);
      },
    },
  };
</script>

<style lang="scss">
  .form-user-logout {
    margin: 1rem;
    padding: 1rem;
    width: 350px;
    border: 1px solid $gray3;
  }
</style>
