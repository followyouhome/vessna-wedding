<template>
  <b-container class="popup popup-cooperation-form">
    <b-form>
      <h3 class="popup_cooperation-form__headline">Форма обратной связи</h3>
      <div class="popup-cooperation-form__group">
        <h4 class="popup_cooperation-form__subline">Ваши контактные данные</h4>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.name" type="text" placeholder="Имя" />
          </b-col>
          <b-col>
            <b-form-input v-model="form.email" type="text" placeholder="E-mail" />
          </b-col>
          <b-col>
            <b-form-input v-model="form.phone" type="text" placeholder="Телефон" />
          </b-col>
        </b-row>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-input v-model="form.country" type="text" placeholder="Страна" />
          </b-col>
          <b-col>
            <b-form-input v-model="form.city" type="text" placeholder="Город" />
          </b-col>
        </b-row>
      </div>
      <div class="popup-cooperation-form__group">
        <h4 class="popup_cooperation-form__subline">Тема сообщения</h4>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-select v-model="form.topic" :options="topics"/>
          </b-col>
        </b-row>
      </div>
      <div class="popup-cooperation-form__group">
        <h4 class="popup_cooperation-form__subline">Сообщение</h4>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-textarea v-model="form.message" placeholder="Сообщение..." rows="3" max-rows="6"/>
          </b-col>
        </b-row>
      </div>
    </b-form>
  </b-container>
</template>

<script>
  import Popup from './popup.vue';

  export default {
    name: 'popup-cooperation-form',

    extends: Popup,

    data () {
      return {
        form: {
          name: '',
          city: '',
          email: '',
          phone: '',
          topic: '',
          message: '',
          country: '',
        },
        topics: [
          'Отзыв',
          'Вопросы',
          'Вакансии',
          'Сотрудничество',
        ],
      };
    },
  };
</script>

<style lang="scss">
  .popup-cooperation-form {
    padding: 30px 40px;
    background: $white;
  }

  .popup-cooperation-form__group {
    margin: 10px 0;
    padding: 30px;
    background: $gray1;
    border-radius: 2px;
  }

  .popup_cooperation-form__headline {
    margin: 0px 0 20px;
    font: 2rem/2rem $RistrettoProLight;
    text-align: center;
  }

  .popup_cooperation-form__subline {
    margin: 0px 0 20px;
    font: 1.5rem/1.5rem $RistrettoProLight;
    text-align: center;
  }
</style>

<story group="Popups" name="Cooperation Form">
  <popup-cooperation-form/>
</story>
