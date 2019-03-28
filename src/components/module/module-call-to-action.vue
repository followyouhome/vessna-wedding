<template>
  <b-container class="module module-call-to-action">
    <div class="module__wrapper module-call-to-action__wrapper">
      <div class="module-call-to-action__content">
        <h3 v-if="content.headline">{{content.headline}}</h3>
        <h4 v-if="content.subline">{{content.subline}}</h4>
        <p v-if="content.copy">{{content.copy}}</p>
      </div>
      <div class="module-call-to-action__action">
        <simple-button
          :text="button.text"
          @click="action"
        />
      </div>
    </div>
  </b-container>
</template>

<script>
  export default {
    name: 'ModuleCallToAction',

    props: ['content', 'button'],

    data () {
      return {

      };
    },

    methods: {
      action () {
        this.$store.commit(this.button.action);
      },
    },
  };
</script>

<style lang="scss">
  .module-call-to-action {
    margin: 30px auto;
  }

  .module-call-to-action__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px;
    background: $gray1;
  }

  .module-call-to-action__content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    * {
      margin: 0.5rem 0;
      padding: 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    h3 {
      font: 1.5rem/1rem $RistrettoProLight;
    }

    h4 {
      font: 2rem/2rem $RistrettoProLight;
    }

    p {
      font: 1rem/1rem $RistrettoProLight;
    }
  }

  .module-call-to-action__action {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<story group="Modules" name="Call To Action">
  <module-call-to-action
    :content="{
      headline: 'Готовы стать нашим диллером?',
      subline: 'Заполните анкету партнера. Наш менеджер свяжется с Вами в ближайшее время.',
      copy: 'Среднее время ответа - 4 часа'
    }"
    :button="{
      action: 'POPUP_SHOW',
      text: 'Заполните анкету'
    }"
  />
</story>
