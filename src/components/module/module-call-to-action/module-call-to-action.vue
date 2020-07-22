<template>
  <div class="module module-call-to-action container">
    <div class="module__wrapper module-call-to-action__wrapper">
      <div class="module-call-to-action__content">
        <h3 class="module-call-to-action__content-headline" v-if="content.headline">{{content.headline}}</h3>
        <h4 class="module-call-to-action__content-subline" v-if="content.subline">{{content.subline}}</h4>
        <p class="module-call-to-action__content-copy" v-if="content.copy">{{content.copy}}</p>
      </div>
      <div class="module-call-to-action__action">
        <simple-button v-if="!amp"
          popup="popup-cooperation-form"
          @click="action"
        >{{button.text}}</simple-button>
        <atom-button label="Заполните анкету" on="tap:popup-cooperation-form" v-else/>
      </div>
    </div>
  </div>
</template>

<script>
  import Module from '@/components/module/module.vue';
  import AtomButton from '@/components/atoms/atom-button/atom-button';

  export default {
    name: 'ModuleCallToAction',

    extends: Module,

    components: {
      AtomButton,
    },

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

    @media #{$phablet} {
      flex-direction: column;
    }
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
  }

  .module-call-to-action__content-headline {
    font: 1.5rem/1rem $RistrettoProLight;

    @media #{$phablet} {
      text-align: center;
    }
  }

  .module-call-to-action__content-subline {
    font: 2rem/2rem $RistrettoProLight;

    @media #{$phablet} {
      text-align: center;
    }
  }

  .module-call-to-action__content-copy {
    font: 1rem/1rem $RistrettoProLight;

    @media #{$phablet} {
      text-align: center;
    }
  }

  .module-call-to-action__action {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
  }
</style>
