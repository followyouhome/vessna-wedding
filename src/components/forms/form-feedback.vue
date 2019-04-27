<template>
  <v-form @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Форма обратной связи</h3>
    </template>
    <template slot='body'>
      <div class="form-feedback__group">
        <h4 class="form__subline">Ваши контактные данные</h4>
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
      <div class="form-feedback__group">
        <h4 class="form__subline">Тема сообщения</h4>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-select v-model="form.topic" :options="topics">
              <template slot="first">
                <option :value="null" disabled>Выберите тему</option>
              </template>
            </b-form-select>
          </b-col>
        </b-row>
      </div>
      <div class="form-feedback__group">
        <h4 class="form__subline">Сообщение</h4>
        <b-row class="mt-4 mb-4">
          <b-col>
            <b-form-textarea v-model="form.message" placeholder="Сообщение..." rows="3" max-rows="6"/>
          </b-col>
        </b-row>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-feedback__control">
        <b-button class="form__submit" type="submit" :disabled="disabled">Отправить</b-button>
        <b-form-checkbox v-model="state.checked" class="ml-4" value="true" inline>Даю согласие на обработку персональных данных</b-form-checkbox>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from './form.vue';

  export default {
    name: 'FormFeedback',

    extends: Form,

    components: {
      'v-form': Form,
    },

    data () {
      return {
        action: '',
        form: {
          name: '',
          city: '',
          email: '',
          phone: '',
          topic: '',
          message: '',
          country: '',
        },
        state: {
          checked: false,
        },
        topics: [
          'Отзыв',
          'Вопросы',
          'Вакансии',
          'Сотрудничество',
        ],
      };
    },

    provide () {
      return {
        action: this.action,
        form: this.form,
      };
    },
  };
</script>

<style lang="scss">
  .form-feedback__group {
    margin: 10px 0;
    padding: 30px;
    background: $gray1;
    border-radius: 2px;
  }

  .form-feedback__control {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>

<story group="Forms" name="Feedback">
  <form-feedback/>
</story>
