<template>
  <v-form class="form-user-login" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Выход из личного кабинета</h3>
    </template>
    <template slot='body'>
      <div class="form-login__group">
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.email || user" type="text" placeholder="Email" disabled/>
          </b-col>
        </b-row>
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
  import Form from './index.vue';

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
      };
    },

    computed: {
      user () {
        return this.$store && this.$store.state && this.$store.state.user && this.$store.state.user.email;
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

<story group="Forms" name="User Logout">
  <form-user-logout/>
</story>
