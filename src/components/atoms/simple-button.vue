<template>
  <div class="simple-button" :class="classes">
    <button
      class="simple-button__button"
      @click="click"
    >
      <slot/>
    </button>
  </div>
</template>

<script>
  import {
    POPUP_SET,
  } from '@/store/mutation-types';

  export default {
    name: 'SimpleButton',

    props: {
      /**
       * Specify type of button
       */
      type: {
        type: String,
        default: 'primary',
      },

      /**
       * Button of text only
       */
      text: {
        type: Boolean,
        default: false,
      },

      /**
       * Apply full width of button to parent
       */
      block: {
        type: Boolean,
        default: false,
      },

      /**
       * Apply background color only to border
       */
      outlined: {
        type: Boolean,
        default: false,
      },

      /**
       * Popup is to show on click
       */
      popup: {
        type: String,
        default: null,
      },

      /**
       * Url to open on click
       */
      href: {
        type: String,
        default: null,
      },
    },

    data () {
      return {

      };
    },

    computed: {
      classes () {
        return {
          [`simple-button--${this.type}`]: !!this.type,
          [`simple-button--text`]: !!this.text,
          [`simple-button--block`]: !!this.block,
          [`simple-button--outlined`]: !!this.outlined,
        };
      },
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
  /**
   * Connect color pallete to button type
   */
  $primary: $yellow;
  $secondary: $dark;
  $default: $gray1;

  .simple-button {
    display: inline-block;
    width: auto;
  }

  // Button type
  .simple-button--primary {
    background: $primary;
    border-color: $primary;
    color: $white;
  }

  .simple-button--secondary {
    background: $secondary;
    border-color: $secondary;
    color: $white;
  }

  .simple-button--default {
    background: $default;
    border-color: $default;
    color: $dark;
  }

  // Button variant
  .simple-button--outlined {
    background: transparent;
    border-style: solid;
    border-width: 1px;

    &.simple-button--primary {
      color: $primary;
    }

    &.simple-button--secondary {
      color: $secondary;
    }

    &.simple-button--default {
      color: $default;
    }
  }

  .simple-button--text {
    background: transparent;
    border-color: transparent;

    &.simple-button--primary {
      color: $primary;
    }

    &.simple-button--secondary {
      color: $secondary;
    }

    &.simple-button--default {
      color: $default;
    }
  }

  // Button width
  .simple-button--block {
    display: block;
    width: 100%;
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
  }
</style>

<story
  group="Atoms"
  name="Simple Button"
>
  <b-container fluid>
    <b-row align-h="center" class="my-4 text-center">
      <b-col>
        <simple-button type="primary">Primary</simple-button>
      </b-col>
      <b-col>
        <simple-button type="secondary">Secondary</simple-button>
      </b-col>
      <b-col>
        <simple-button type="default">Default</simple-button>
      </b-col>
    </b-row>
    <b-row align-h="center" class="my-4 text-center">
      <b-col>
        <simple-button outlined>Outlined</simple-button>
      </b-col>
      <b-col>
        <simple-button text>Text</simple-button>
      </b-col>
      <b-col>
        <simple-button block>Block</simple-button>
      </b-col>
    </b-row>
  </b-container>
</story>
