<template>
  <form class="form-contact-us">
    <div class="form-contact-us__column">
      1
    </div>
    <div class="form-contact-us__column">
      2
    </div>
  </form>
</template>

<script>
  export default {
    name: 'FormContactUs',

    data () {
      return {
        seo: {
          name: 'Обратная связь',
          description: 'Информация о сотрудничестве и возможность оставить сообщение',
        },
      };
    },
  };
</script>

<style lang="scss">
  .form-contact-us {
    display: flex;
    flex-direction: row;
    position: relative;
    max-width: 1000px;
    margin: auto;

    @media #{$tablet} {
      flex-direction: column;
      max-width: none;
    }
  }

  .form-contact-us__column {
    width: 50%;

    @media #{$tablet} {
      width: 100%;
    }
  }
</style>
