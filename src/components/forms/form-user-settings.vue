<template>
  <v-form class="form-user-settings" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Настройки</h3>
    </template>
    <template slot='body'>
      <div class="form-user-settings__group">
        <b-row class="mt-4 mb-4" align-v="center">
          <b-col sm="2" class="align-middle">
            <label class="form__label" for="input-info-phone">Имя:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="form.name" id="input-info-phone" type="text" placeholder="Введите своё имя" disabled />
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4" align-v="center">
          <b-col sm="2">
            <label class="form__label" for="input-info-city">Email:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="form.email" id="input-info-city" type="text" placeholder="Введите свой email" disabled />
          </b-col>
        </b-row>
      </div>
      <div class="form-user-settings__group">
        <h4 class="form__subline">Контактные данные</h4>
        <b-row class="mt-4 mb-4" align-v="center">
          <b-col sm="2">
            <label class="form__label" for="input-info-phone">Телефон:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="form.info.phone" id="input-info-phone" type="text" placeholder="Введите контактный телефон" />
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4" align-v="center">
          <b-col sm="2">
            <label class="form__label" for="input-info-city">Город:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="form.info.city" id="input-info-city" type="text" placeholder="Введите город" />
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4" align-v="center">
          <b-col sm="2">
            <label class="form__label" for="input-info-shop">Салон:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input v-model="form.info.shop" id="input-info-shop" type="text" placeholder="Введите название вашего бизнеса" />
          </b-col>
        </b-row>
      </div>
      <div class="form-user-settings__group">
        <h4 class="form__subline">Настройки пользователя</h4>
        <b-row class="mt-4 mb-4" align-v="center">
          <b-col sm="2">
            <label class="form__label" for="input-access-currency">Валюта:</label>
          </b-col>
          <b-col sm="10">
            <b-form-select v-model="form.access.currency" id="input-access-currency" :options="currencies">
              <template slot="first">
                <option :value="null" disabled>Выберите валюту</option>
              </template>
            </b-form-select>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4" align-v="center">
          <b-col>
            <b-form-checkbox v-model="form.access.subscription" class="ml-4" value="true" inline>Подписаться на новостную рассылку</b-form-checkbox>
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4" align-v="center">
          <b-col>
            <b-form-checkbox v-model="form.access.content" class="ml-4" value="true" inline disabled title="Для изменения этой настройки обратитесь к администратору">Доступ к промо-материалам</b-form-checkbox>
          </b-col>
        </b-row>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-feedback__control">
        <b-button class="form__submit" type="submit" :disabled="disabled" block>Сохранить</b-button>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from './form.vue';

  export default {
    name: 'FormUserSettings',

    extends: Form,

    components: {
      'v-form': Form,
    },

    data () {
      const user = this.$store && this.$store.state && this.$store.state.user;

      return {
        action: 'settings',
        state: {
          checked: true,
        },
        form: {
          email: user && user.email,
          name: user && user.name,
          info: {
            phone: user && user.info && user.info.phone,
            city: user && user.info && user.info.city,
            shop: user && user.info && user.info.shop,
          },
          access: {
            content: user && user.access && user.access.content,
            currency: user && user.access && user.access.currency,
            subscription: user && user.access && user.access.subscription,
          },
        },
        currencies: [
          {
            value: 'usd',
            text: 'USD',
          }, {
            value: 'rub',
            text: 'RUB',
          },
        ],
      };
    },

    computed: {
      user () {
        return this.$store && this.$store.state && this.$store.state.user;
      },
    },
  };
</script>

<style lang="scss">
  .form-user-settings {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid $gray3;
  }

  .form-user-settings__group {
    margin: 10px 0;
    padding: 30px;
    background: $gray1;
    border-radius: 2px;
  }
</style>

<story group="Forms" name="User Settings">
  <form-user-settings/>
</story>
