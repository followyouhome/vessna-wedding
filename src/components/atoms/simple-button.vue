<template>
  <div :class="['simple-button', `simple-button--${type}`]">
    <button
      :class="['simple-button__button', `simple-button__button--${type}`]"
      @click="click"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
  import {
    POPUP_SET,
  } from '@/store/mutation-types';

  export default {
    name: 'SimpleButton',

    props: ['popup', 'href', 'type', 'icon', 'text'],

    data () {
      return {

      };
    },

    methods: {
      click () {
        if (this.popup) {
          this.$store.commit(POPUP_SET, { popup: this.popup });
        } else if (this.href) {
          window.open(this.href, '_self');
        }
      },
    },
  };
</script>

<style lang="scss">
  .simple-button {
    display: inline-block;
    color: $white;
    background: $yellow;

    &--block {
      display: block;
      width: 100%;
    }

    &--inline {
      display: inline-block;
      width: auto;
    }
  }

  .simple-button__button {
    padding: 10px 40px;
    color: inherit;
    border: none;
    background: inherit;
    font: 1.5rem/1 $RistrettoProLight;
    letter-spacing: 2px;
    transition: opacity linear 0.1s;

    &:hover {
      opacity: 0.8;
    }

    &--block {
      display: block;
      width: 100%;
    }

    &--inline {
      display: inline-block;
      width: auto;
    }
  }
</style>

<story group="Atoms" name="Simple Button">
  <simple-button
    icon='vk'
    text='Подпишись'
  />
</story>
