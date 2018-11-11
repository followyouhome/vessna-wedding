<template>
  <form v-on:submit.prevent="login">
    <legend class="popup-login__title">Вход</legend>
      <input class="form__input-text" v-model.trim="form.email" type="email" placeholder="Email">
      <input class="form__input-text" v-model="form.password" type="password" placeholder="Пароль">
      <!-- <div class="popup__recaptcha g-recaptcha" :id="config.selector" data-callback="loginRecaptcha" :data-sitekey="config.sitekey"></div> -->
      <input type="submit" class="form__button-submit" value="Войти" :title="disabled ? 'Заполните все поля' : 'Нажмите, чтобы войти'">
    <!-- <div class="popup__close" @click="close" title="Закрыть окно">✖</div> -->
  </form>
</template>

<script>
  export default {
    name: 'form-user-login',

    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        state: {
          request: false,
          recaptcha: false,
        },
      };
    },

    computed: {
      disabled () {
        // return !this.form.email.length
          // || !this.form.password.length
          // || !this.status.recaptcha;
      },
    },

    methods: {
      login() {
        debugger;
        this.state.request = true;
        //
        this.$store.dispatch('login', this.form)
          .then((data) => {
            debugger;
            this.state.request = false;
        //
        //     if (data._id) {
        //       this.status.success = true;
        //
        //       setTimeout(() => { this.status.available = false; }, this.config.animation);
        //       setTimeout(() => { this.$store.commit('POPUP_UNSET'); }, this.config.animation * 2);
        //     } else {
        //       this.status.fail = true;
        //
        //       setTimeout(() => { this.status.fail = false; this.$store.commit('POPUP_RESET'); }, this.config.animation * 3);
          });
      },
    },
  };
</script>

<style lang="scss">

</style>
