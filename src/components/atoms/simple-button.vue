<template>
  <div class="simple-button">
    <button class="simple-button__button">
      {{text}}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'SimpleButton',

    props: ['icon', 'text'],

    data () {
      return {

      };
    },
  };
</script>

<style lang="scss">
  .simple-button {
    display: inline-block;
  }

  .simple-button__button {
    padding: 10px 40px;
    color: $white;
    border: none;
    background: $yellow;
    font: 1.5rem/1 $RistrettoProMedium;
    letter-spacing: 2px;
    transition: opacity linear 0.1s;

    &:hover {
      opacity: 0.8;
    }
  }
</style>

<story group="Atoms" name="Simple Button">
  <simple-button
    icon='vk'
    text='Подпишись'
  />
</story>
