<template>
  <div class="module module-dealers-map">
    <div class="module-dealers-map__map" :id="yandexMapsId">
      <!-- Yandex map is here -->
    </div>
    123
  </div>
</template>

<script>
  import shortid from 'shortid';
  import loadScript from '@/components/mixins/load-script.js';

  const key = process.env.YANDEX_MAPS_KEY;

  console.log(process.env);

  export default {
    name: 'ModuleDealersMap',

    props: ['dealers'],

    mixins: [loadScript],

    data () {
      return {
        yandexMapsId: `yandex-maps-${shortid.generate()}`,
        yandexMapsSDK: `https://api-maps.yandex.ru/2.1/?apikey=${key}&lang=ru_RU`,
      };
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        this.loadScript('yandexMapsSDK', this.yandexMapsSDK);

        setTimeout(() => {
          console.log(this.yandexMapsId);
          let myMap = new ymaps.Map(this.yandexMapsId, {
              // Координаты центра карты.
              // Порядок по умолчанию: «широта, долгота».
              // Чтобы не определять координаты центра карты вручную,
              // воспользуйтесь инструментом Определение координат.
              center: [55.76, 37.64],
              // Уровень масштабирования. Допустимые значения:
              // от 0 (весь мир) до 19.
              zoom: 7,
          });
        }, 3000);
      }
    },
  };
</script>

<style lang="scss">
  .module-dealers-map {

  }

  .module-dealers-map__map {
    height: 500px;
  }
</style>

<story group="Modules" name="Dealers Map">
  <module-dealers-map

  />
</story>
