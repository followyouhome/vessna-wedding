<template>
  <div class="global-announcement">
    <div class="global-announcement__text">
      {{announcement}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GlobalAnnouncement',

    props: ['announcement'],
  };
</script>

<style lang="scss">
  .global-announcement {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: $black;

    @media #{$tablet} {
      height: 40px;
    }
  }

  .global-announcement__text {
    font: 1rem/1 $RistrettoProRegular;
    color: $white;
  }
</style>
