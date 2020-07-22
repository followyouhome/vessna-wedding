<template>
  <v-form @success="success" @failure="failure">
    <template slot='header'>
      <h3 class="form__headline">Заявка на сотрудничество</h3>
    </template>
    <template slot='body'>
      <div class="form-cooperation__group">
        <h4 class="form__subline">Ваши контактные данные</h4>
        <div class="row mt-4 mb-4">
          <div class="col col-sm-12 col-4 my-1">
            <atom-input v-model="form.name" name="name" type="text" placeholder="Имя" required/>
          </div>
          <div class="col col-sm-12 col-4 my-1">
            <atom-input v-model="form.email" name="email" type="text" placeholder="E-mail" required/>
          </div>
          <div class="col col-sm-12 col-4 my-1">
            <atom-input v-model="form.phone" name="phone" type="text" placeholder="Телефон" required/>
          </div>
        </div>
        <div class="row mt-4 mb-4">
          <div class="col col-sm-12 col-4 my-1">
            <atom-input v-model="form.country" name="country" type="text" placeholder="Страна" required/>
          </div>
          <div class="col col-sm-12 col-4 my-1">
            <atom-input v-model="form.city" name="city" type="text" placeholder="Город" required/>
          </div>
          <div class="col col-sm-12 col-4 my-1">
            <atom-input v-model="form.showroom" name="showroom" type="text" placeholder="Салон" required/>
          </div>
        </div>
      </div>
      <div class="form-cooperation__group">
        <div class="row mt-4 mb-4">
          <div class="col col-4">
            <atom-checkbox v-model="form.subscribe" name="subscribe" label="Подписаться на новостную рассылку" class="ml-4"/>
          </div>
          <div class="col col-4">
            <atom-checkbox v-model="form.lookbook" name="lookbook" label="Запросить актуальный лукбук" class="ml-4"/>
          </div>
          <div class="col col-4">
            <atom-checkbox v-model="form.callback" name="callback" label="Получить обратный звонок" class="ml-4"/>
          </div>
        </div>
      </div>
      <div class="form-cooperation__group">
        <h4 class="form__subline">Вид сотрудничества</h4>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-select v-model="form.topic" name="topic" :options="topics" block>
              <template slot="first">
                <option :value="null" disabled>Выберите вид</option>
              </template>
            </atom-select>
          </div>
        </div>
      </div>
      <div class="form-cooperation__group">
        <h4 class="form__subline">Сообщение</h4>
        <div class="row mt-4 mb-4">
          <div class="col col-12">
            <atom-textarea v-model="form.message" name="message" placeholder="Сообщение..." rows="3" block/>
          </div>
        </div>
      </div>
    </template>
    <template slot='footer'>
      <div class="form-cooperation__control">
        <div class="row mt-4 mb-4">
          <div class="col col-4 col-sm-12">
            <atom-button class="form__submit my-1" type="submit" :disabled="disabled" :title="title" label="Отправить"/>
          </div>
          <div class="col col-8 col-sm-12">
            <atom-checkbox class="ml-4 my-1" v-model="state.checked" name="checked" label="Даю согласие на обработку персональных данных"/>
          </div>
        </div>
      </div>
    </template>
  </v-form>
</template>

<script>
  import Form from '../form.vue';
  import { AtomButton, AtomInput, AtomCheckbox, AtomSelect, AtomTextarea } from '@/components/atoms';

  export default {
    name: 'FormCooperation',

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
        action: '/api/forms/cooperation',
        form: {
          name: '',
          city: '',
          email: '',
          phone: '',
          topic: '',
          message: '',
          country: '',
          lookbook: false,
          callback: false,
          subscribe: false,
        },
        state: {
          checked: false,
          recaptcha: null,
        },
        label: {
          success: 'Заявка отправлена',
          failure: 'Ошибка сервера',
        },
        topics: [
          'Пробная поставка',
          'Оптовые поставки',
          'Франшиза',
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
  .form-cooperation__group {
    margin: 10px 0;
    padding: 30px;
    background: $gray1;
    border-radius: 2px;
  }

  .form-cooperation__control .row {
    @media #{$phablet} {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column-reverse;
      margin-top: 2rem;
    }
  }
</style>
