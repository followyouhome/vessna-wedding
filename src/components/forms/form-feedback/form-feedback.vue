<template>
  <v-form @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Форма обратной связи</h3>
    </template>
    <template slot='body'>
      <div class="form-feedback__group">
        <h4 class="form__subline">Ваши контактные данные</h4>
        <div class="row my-4">
          <div class="col col-4 col-sm-12 my-1">
            <atom-input class="form__input-text" v-model="form.name" name="name" type="text" placeholder="Имя" required/>
          </div>
          <div class="col col-4 col-sm-12 my-1">
            <atom-input class="form__input-text" v-model="form.email" name="email" type="text" placeholder="E-mail" required/>
          </div>
          <div class="col col-4 col-sm-12 my-1">
            <atom-input class="form__input-text" v-model="form.phone" name="phone" type="text" placeholder="Телефон" required/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-6 col-sm-12 my-1">
            <atom-input class="form__input-text" v-model="form.country" name="country" type="text" placeholder="Страна" required/>
          </div>
          <div class="col col-6 col-sm-12 my-1">
            <atom-input class="form__input-text" v-model="form.city" name="city" type="text" placeholder="Город" required/>
          </div>
        </div>
      </div>
      <div class="form-feedback__group">
        <h4 class="form__subline">Тема сообщения</h4>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-select v-model="form.topic" name="topic" :options="topics" block>
              <template v-slot:first>
                <option :value="null" disabled>Выберите тему</option>
              </template>
            </atom-select>
          </div>
        </div>
      </div>
      <div class="form-feedback__group">
        <h4 class="form__subline">Сообщение</h4>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-textarea v-model="form.message" name="message" placeholder="Сообщение..." rows="3" block/>
          </div>
        </div>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-feedback__control">
        <atom-button class="form__submit my-1" type="submit" :disabled="disabled" :title="title" label="Отправить"/>
        <atom-checkbox class="ml-4 my-1" v-model="state.checked" name="checked" value="true" label="Даю согласие на обработку персональных данных"/>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from '../form.vue';
  import { AtomButton, AtomInput, AtomCheckbox, AtomSelect, AtomTextarea } from '@/components/atoms';

  export default {
    name: 'FormFeedback',

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
        action: '/api/forms/feedback',
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
          recaptcha: null,
        },
        label: {
          success: 'Сообщение отправлено',
          failure: 'Ошибка сервера',
        },
        topics: [
          'Отзыв',
          'Вопросы',
          'Вакансии',
          'Сотрудничество',
        ],
      };
    },

    methods: {
      success () {
        setTimeout(() => {
          this.$emit('success');
        }, 3000);
      },

      failure () {
        setTimeout(() => {
          this.$emit('failure');
        }, 3000);
      },
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

    @media #{$phablet} {
      flex-direction: column-reverse;
    }
  }
</style>
