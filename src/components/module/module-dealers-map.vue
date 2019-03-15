<template>
  <div class="module module-dealers-map">
    <div class="module-dealers-map__list">
      <b-form-select v-model="filterByCountry" :options="countries"/>
    </div>
    <div class="module-dealers-map__wrapper">
      <div class="module-dealers-map__map" :id="yandexMapsId">
        <!-- Yandex map is here -->
      </div>
      <div class="module-dealers-map__sidebar d-none" ref="sidebar">
        <button @click="hideSidebar">close</button>
        <h3>{{activeDealler.name}}</h3>
      </div>
    </div>

  </div>
</template>

<script>
  import shortid from 'shortid';
  import loadScriptMixin from '@/components/mixins/load-script.js';
  import yandexMapsMixin from '@/components/mixins/yandex-maps.js';

  const key = process.env.YANDEX_MAPS_KEY;

  export default {
    name: 'ModuleDealersMap',

    props: ['dealers'],

    mixins: [loadScriptMixin, yandexMapsMixin],

    data () {
      return {
        yandexMapsId: `yandex-maps-${shortid.generate()}`,
        yandexMapsSDK: `https://api-maps.yandex.ru/2.1/?apikey=${key}&lang=ru_RU`,
        yandexMapsSettings: {
          center: [55.76, 37.64],
          zoom: 7,
        },
        filterByName: null,
        filterByCountry: null,
      };
    },

    computed: {
      countries () {
        return this.dealers.map(dealer => dealer.address.country);
      },

      activeDealler () {
        return this.dealers.find(dealer => typeof this.filterByName === 'string' ? dealer.name === this.filterByName : true);
      },

      filteredDealers () {
        return this.dealers.filter(dealer => typeof this.filterByCountry === 'string' ? dealer.address.country === this.filterByCountry : true);
      },
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        this.loadScript('yandexMapsSDK', this.yandexMapsSDK).then(() => {
          this.initMap(this.yandexMapsId, this.yandexMapsSettings, this.filteredDealers);
        });
      }
    },

    methods: {
      setCountryFilter (country) {
        this.filterByCountry = country;
      },

      showSidebar () {
        this.$refs.sidebar.classList.remove('d-none');
      },

      hideSidebar () {
        this.$refs.sidebar.classList.add('d-none');
      },

      onPlacemarkClick (event) {
        this.filterByName = event.get('target').properties.get('id');
        this.showSidebar();
      },
    },
  };
</script>

<style lang="scss">
  .module-dealers-map {

  }

  .module-dealers-map__list {
    margin: 20px 0;
    padding: 10px;
    background: $gray1;
  }

  .module-dealers-map__wrapper {
    position: relative;
  }

  .module-dealers-map__map {
    height: 500px;
  }

  .module-dealers-map__sidebar {
    position: absolute;
    right: 0;
    top: 0;
    background: $white;
  }
</style>

<story group="Modules" name="Dealers Map">
  <module-dealers-map
    :dealers="[{
      name: 'Boutique Natalia Exclusif',
      description: '',
      address: {
        country: 'Канада',
        latlng: [55.76, 37.64],
        full: '',
      },
      contact: {
        phone: '',
        email: '',
        website: '',
        social: {
          pinterest: '',
          instagram: '',
          facebook: '',
        },
      },
    }, {
      name: 'Vessna Minsk',
      description: '',
      address: {
        country: 'Беларусь',
        latlng: [57.76, 38.64],
        full: '',
      },
      contact: {
        phone: '',
        email: '',
        website: '',
        social: {
          pinterest: '',
          instagram: '',
          facebook: '',
        },
      },
    }, {
      name: 'Салон Дворянка',
      description: '',
      address: {
        country: 'Россия',
        latlng: [58.76, 39.64],
        full: '',
      },
      contact: {
        phone: '',
        email: '',
        website: '',
        social: {
          pinterest: '',
          instagram: '',
          facebook: '',
        },
      },
    }]"
  />
</story>
