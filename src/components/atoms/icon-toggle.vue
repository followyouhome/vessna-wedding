<template>
  <div :class="['icon-toggle', icon, state ? 'is-active' : '']" @mouseenter="mouseenter" @mouseleave="mouseleave" @click="click">
    <div class="inner"></div>
  </div>
</template>

<script>
  export default {
    name: 'IconToggle',

    props: ['icon', 'handle'],

    data () {
      return {
        state: false,
      };
    },

    methods: {
      mouseenter () {
        if (this.handle.includes('mouseenter')) {
          this.state = true;
          this.$emit('mouseenter');
        }
      },

      mouseleave () {
        if (this.handle.includes('mouseleave')) {
          this.state = false;
          this.$emit('mouseleave');
        }
      },

      click () {
        if (this.handle.includes('click')) {
          this.state = !this.state;
          this.$emit('click');
        }
      },
    },
  };
</script>

<style lang="scss">
  .icon-toggle {
    position: relative;
    margin: auto;

    .inner {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
    }

    &.hamburger {
      .inner {
        top: 50%;
        display: block;
        margin-top: -2px;
        transition-timing-function: cubic-bezier(.55,.055,.675,.19);
        transition-duration: 75ms;

        &, &:after, &:before {
          position: absolute;
          width: 20px;
          height: 2px;
          transition-timing-function: ease;
          transition-duration: .15s;
          transition-property: transform;
          border-radius: 2px;
          background-color: #000;
        }

        &:after, &:before {
          display: block;
          content: "";
        }

        &:before {
          top: -7px;
          transition: top 75ms ease .12s,opacity 75ms ease;

        }

        &:after {
          bottom: -7px;
          transition: bottom 75ms ease .12s,transform 75ms cubic-bezier(.55,.055,.675,.19);
        }
      }

      &.is-active {
        .inner {
          transform: rotate(45deg);
          transition-delay: .12s;
          transition-timing-function: cubic-bezier(.215,.61,.355,1);

          &:before {
            top: 0;
            opacity: 0;
            transition: top 75ms ease,opacity 75ms ease .12s;
          }

          &:after {
            bottom: 0;
            transform: rotate(-90deg);
            transition: bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s;
          }
        }
      }
    }
  }
</style>
