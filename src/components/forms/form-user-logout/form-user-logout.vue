<template>
  <v-form class="form-user-login" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Выход из личного кабинета</h3>
    </template>
    <template slot='body'>
      <div class="form-login__group">
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <input class="form__input-text" v-model="form.email || user" type="text" placeholder="Email" disabled/>
          </div>
        </div>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-feedback__control">
        <b-button class="form__submit" type="submit" block>Выйти</b-button>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from '../form.vue';

  const REDIRECTION_TIMEOUT = 3000;

  export default {
    name: 'FormUserLogout',

    extends: Form,

    components: {
      'v-form': Form,
    },

    data () {
      return {
        action: 'logout',
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
