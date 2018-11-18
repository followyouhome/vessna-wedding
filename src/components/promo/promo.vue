<template>

</template>

<script>
  import InView from 'in-view';

  export default {

    mounted () {
      if (__VUE_ENV__ === 'client') {
        if (this.$el.classList.contains('promo--fade-in')) {
          InView('.promo--fade-in')
            .on('enter', () => this.fadein = false)
            .on('exit', () => this.fadein = true);
        }
      }
    },
  };
</script>

<style lang="scss">
  .promo {
    opacity: 1;
    transform: translateY(0);
    transition: all linear 0.5s;

    .promo__wrapper > * {
      transition: all linear 0.5s;
      transition-delay: 0.5s;

      &:nth-child(1) {
        transition-delay: 0.1s;
      }

      &:nth-child(2) {
        transition-delay: 0.2s;
      }

      &:nth-child(3) {
        transition-delay: 0.3s;
      }

      &:nth-child(4) {
        transition-delay: 0.4s;
      }
    }
  }

  .promo--fade-in {
    opacity: 0;
    transform: translateY(5px);

    .promo__wrapper > * {
      transform: translateY(10px);
    }
  }

  .promo--fade-out {
    opacity: 0;
    transform: translateY(5px);

    .promo__wrapper > * {
      transform: translateY(10px);
    }
  }
</style>
