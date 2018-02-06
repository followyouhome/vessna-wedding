<template>
  <fieldset :class="['popup', 'popup-signup', this.status.available ? 'popup--show' : 'popup--hide']">
    <legend class="popup-signup__title">Регистрация</legend>
    <form v-on:submit.prevent="signup">
      <input class="form__input-text" v-model.trim="name" type="name" placeholder="Имя">
      <input class="form__input-text" v-model.trim="email" type="email" placeholder="Email">
      <input class="form__input-text" v-model="password" type="password" placeholder="Пароль">
      <hr class="form__divider">
      <input class="form__input-text" v-model.trim="phone" type="phone" placeholder="Телефон">
      <input class="form__input-text" v-model.trim="city" type="text" placeholder="Город">
      <input class="form__input-text" v-model.trim="shop" type="text" placeholder="Салон">

      <div class="popup__recaptcha g-recaptcha" :id="config.selector" data-callback="loginRecaptcha" :data-sitekey="config.sitekey"></div>
      <input type="submit" :class="['form__button-submit', this.status.request ? 'request' : '', this.status.success ? 'success' : '', this.status.fail ? 'fail' : '' ]" value="Войти" :disabled="disabled" :title="disabled ? 'Заполните все поля' : 'Нажмите, чтобы войти'">
    </form>
    <div class="popup__close" @click="close" title="Закрыть окно">✖</div>
  </fieldset>
</template>

<script>
  import config from '../../../config';
  import Popup from './popup.vue';

  export default {
    name: 'popup-signup',

    extends: Popup,

    data() {
      return {
        name: '',
        email: '',
        password: '',
        phone: '',
        city: '',
        shop: '',
        recaptcha: false,
      };
    },

    computed: {
      disabled () {
        return !this.name.length
          || !this.email.length
          || !this.password.length
          || !this.phone.length
          || !this.city.length
          || !this.shop.length
          || !this.status.recaptcha;
      },
    },

    methods: {
      login() {
        this.status.request = true;

        this.$store.dispatch('signup', this)
          .then((data) => {
            this.status.request = false;

            if (data._id) {
              this.status.success = true;

              setTimeout(() => { this.status.available = false; }, this.config.animation);
              setTimeout(() => { this.$store.commit('POPUP_UNSET'); }, this.config.animation * 2);
            } else {
              this.status.fail = true;

              setTimeout(() => { this.status.fail = false; this.$store.commit('POPUP_RESET'); }, this.config.animation * 3);
            }
          });
      },
    },
  };
</script>

<style lang="scss">
  .popup-signup {
    position: relative;
    width: 300px;
    padding: 0px 16px 16px;

    border: 1px solid $gray1;
    background: $white;
    box-shadow: 10px -10px 15px 10px $white;
  }

  .popup-signup__title {
    padding: 10px;
  }
</style>
