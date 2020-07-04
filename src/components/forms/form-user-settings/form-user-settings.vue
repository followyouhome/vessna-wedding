<template>
  <v-form class="form-user-settings" @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Настройки</h3>
    </template>
    <template slot='body'>
      <div class="form-user-settings__group">
        <div class="row mt-4 mb-4" align-v="center">
          <div sm="2" class="col col-2 align-middle">
            <label class="form__label" for="input-info-phone">Имя:</label>
          </div>
          <div class="col col-10">
            <input class="form__input-text" v-model="form.name" id="input-info-phone" type="text" placeholder="Введите своё имя" disabled />
          </div>
        </div>
        <div class="row mt-4 mb-4" align-v="center">
          <div class="col col-2">
            <label class="form__label" for="input-info-city">Email:</label>
          </div>
          <div class="col col-10">
            <input class="form__input-text" v-model="form.email" id="input-info-city" type="text" placeholder="Введите свой email" disabled />
          </div>
        </div>
      </div>
      <div class="form-user-settings__group">
        <h4 class="form__subline">Контактные данные</h4>
        <div class="row mt-4 mb-4" align-v="center">
          <div class="col col-2">
            <label class="form__label" for="input-info-phone">Телефон:</label>
          </div>
          <div class="col col-10">
            <input class="form__input-text" v-model="form.info.phone" id="input-info-phone" type="text" placeholder="Введите контактный телефон" />
          </div>
        </div>
        <div class="row mt-4 mb-4" align-v="center">
          <div class="col col-2">
            <label class="form__label" for="input-info-city">Город:</label>
          </div>
          <div class="col col-10">
            <input class="form__input-text" v-model="form.info.city" id="input-info-city" type="text" placeholder="Введите город" />
          </div>
        </div>
        <div class="row mt-4 mb-4" align-v="center">
          <div class="col col-2">
            <label class="form__label" for="input-info-shop">Салон:</label>
          </div>
          <div class="col col-10">
            <input class="form__input-text" v-model="form.info.shop" id="input-info-shop" type="text" placeholder="Введите название вашего бизнеса" />
          </div>
        </div>
      </div>
      <div class="form-user-settings__group">
        <h4 class="form__subline">Настройки пользователя</h4>
        <div class="row mt-4 mb-4" align-v="center">
          <div class="col col-2">
            <label class="form__label" for="input-access-currency">Валюта:</label>
          </div>
          <div class="col col-10">
            <b-form-select v-model="form.access.currency" id="input-access-currency" :options="currencies">
              <template slot="first">
                <option :value="null" disabled>Выберите валюту</option>
              </template>
            </b-form-select>
          </div>
        </div>
        <div class="row mt-4 mb-4" align-v="center">
          <div class="col col-12">
            <b-form-checkbox v-model="form.access.subscription" class="ml-4" value="true" inline>Подписаться на новостную рассылку</b-form-checkbox>
          </div>
        </div>
        <div class="row mt-4 mb-4" align-v="center">
          <div class="col col-12">
            <b-form-checkbox v-model="form.access.content" class="ml-4" value="true" inline disabled title="Для изменения этой настройки обратитесь к администратору">Доступ к промо-материалам</b-form-checkbox>
          </div>
        </div>
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
  import Form from '../form.vue';

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
        label: {
          success: 'Настройки обновлены',
          failure: 'Ошибка сервера',
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
