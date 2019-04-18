<template>
  <b-container class="module module-dealers-map" v-show="!error">
    <h2 class="module-dealers-map__headline">Диллеры</h2>
    <div class="module-dealers-map__list">
      <b-form-select v-model="filterByCountry" :options="countries">
        <template slot="first">
          <option :value="null" disabled>Выберите страну</option>
        </template>
      </b-form-select>
    </div>
    <div class="module-dealers-map__wrapper">
      <no-ssr>
        <div class="module-dealers-map__map" :id="yandexMapsId"></div>
      </no-ssr>
      <div class="module-dealers-map__sidebar module-dealers-map__sidebar--hide" ref="sidebar">
        <button class="module-dealers-map__sidebar-close" @click="hideSidebar">×</button>
        <h3 class="module-dealers-map__sidebar-headline">{{activeDealler.name}}</h3>
        <template v-if="activeDealler.description">
          <p class="module-dealers-map__sidebar-copy">{{activeDealler.description}}</p>
        </template>
        <template v-if="activeDealler.contact">
          <h5 class="module-dealers-map__sidebar-subline">Контакты</h5>
          <p class="module-dealers-map__sidebar-copy">{{activeDealler.contact.phone}} {{activeDealler.contact.email}}</p>
        </template>
        <template v-if="activeDealler.address">
          <h5 class="module-dealers-map__sidebar-subline">Адрес</h5>
          <p class="module-dealers-map__sidebar-copy">{{activeDealler.address.full}}</p>
        </template>
        <template v-if="activeDealler.contact.social">
          <h5 class="module-dealers-map__sidebar-subline">Социальные сети</h5>
          <ul class="module-dealers-map__sidebar-list">
            <li class="module-dealers-map__sidebar-list-item" v-if="activeDealler.contact.social.facebook">
              <a class="module-dealers-map__sidebar-icon" :href="activeDealler.contact.social.facebook" rel="nofollow">
                <vector-icon icon="facebook"/>
              </a>
            </li>
            <li class="module-dealers-map__sidebar-list-item" v-if="activeDealler.contact.social.facebook">
              <a class="module-dealers-map__sidebar-icon" :href="activeDealler.contact.social.instagram" rel="nofollow">
                <vector-icon icon="instagram"/>
              </a>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </b-container>
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
        error: false,
        yandexMapsId: `yandex-maps-${shortid.generate()}`,
        yandexMapsSDK: `https://api-maps.yandex.ru/2.1/?apikey=${key}&lang=ru_RU`,
        yandexMapsSettings: {
          controls: ['geolocationControl', 'zoomControl'],
          center: [53.918949, 27.579726],
          zoom: 12,
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

    watch: {
      filterByCountry () {
        this.hideSidebar();
        this.moveMapToLatLng(this.filteredDealers[0].address.latlng);
      },
    },

    mounted () {
      if (__VUE_ENV__ === 'client') {
        this.loadScript('yandexMapsSDK', this.yandexMapsSDK).then(() => {
          this.initMap(this.yandexMapsId, this.yandexMapsSettings, this.filteredDealers);
        }).catch(() => {
          this.error = true;
        });
      }
    },

    methods: {
      setCountryFilter (country) {
        this.filterByCountry = country;
      },

      showSidebar () {
        this.$refs.sidebar.classList.remove('module-dealers-map__sidebar--hide');
        this.$refs.sidebar.classList.add('module-dealers-map__sidebar--show');
      },

      hideSidebar () {
        this.$refs.sidebar.classList.remove('module-dealers-map__sidebar--show');
        this.$refs.sidebar.classList.add('module-dealers-map__sidebar--hide');
      },

      onPlacemarkClick (event) {
        this.filterByName = event.get('target').properties.get('id');
        this.showSidebar();
      },
    },
  };
</script>

<style lang="scss">
  @include animation-fade-in('sidebar', 3rem, 0);

  .module-dealers-map {

  }

  .module-dealers-map__headline {
    margin: 30px 0;
    font: 3rem/3rem $RistrettoProLight;
    text-align: center;
  }

  .module-dealers-map__list {
    margin: 20px 0;
    padding: 13px 80px;
    background: $gray1;

    .custom-select {
      height: 50px;
      border: none;
    }
  }

  .module-dealers-map__wrapper {
    position: relative;
    margin: 35px 0;
    padding-top: 50%;
    overflow: hidden;
  }

  .module-dealers-map__map {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }

  .module-dealers-map__sidebar {
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
    width: 400px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 40px;
    background: $white;

    &--show {
      display: flex;
      animation: animation-fade-in-sidebar 0.2s cubic-bezier(.55,0,.1,1);

      > * {
        display: block;
        animation: animation-fade-in-sidebar 1s cubic-bezier(.55,0,.1,1);

        &:nth-child(1) {
          animation-duration: 0.2s;
        }

        &:nth-child(2) {
          animation-duration: 0.4s;
        }

        &:nth-child(3) {
          animation-duration: 0.6s;
        }

        &:nth-child(4) {
          animation-duration: 0.8s;
        }
      }
    }

    &--hide {
      display: none;

      > * {
        display: none;
      }
    }
  }

  .module-dealers-map__sidebar-close {
    position: absolute;
    padding: 0 5px;
    right: 5px;
    top: 10px;
    cursor: pointer;
    border: none;
    background: $white;
  }

  .module-dealers-map__sidebar-headline {
    margin: 0px 0 30px;
    font: 2rem/1 $RistrettoProMedium;
  }

  .module-dealers-map__sidebar-subline {
    margin: 0px 0 10px;
    font: 1.2rem/1 $RistrettoProLight;
  }

  .module-dealers-map__sidebar-copy {
    margin: 0px 0 30px;
    font-size: 1rem;
  }

  .module-dealers-map__sidebar-list {
    padding: 0;
  }

  .module-dealers-map__sidebar-list-item {
    display: inline-block;
  }

  .module-dealers-map__sidebar-icon {
    $size: 30px;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    width: $size;
    height: $size;
    border-radius: $size;
    background: $yellow;
    border: 1px solid $white;
    text-align: center;
    color: $white;

    &:hover {
      color: $yellow;
      background: $white;
      border-color: $yellow;
    }
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
        full: '1326 Beaubien E, Montreal, Qc H2G 1K8',
      },
      contact: {
        phone: '1-514-678-6868',
        email: '',
        website: 'https://www.nataliaexclusif.com',
        social: {
          pinterest: 'https://www.pinterest.com/nataliaexclusif/',
          instagram: 'https://www.instagram.com/boutiquenataliaexclusif/',
          facebook: 'https://www.facebook.com/boutiquenataliaexclusif',
        },
      },
    }, {
      name: 'Vessna Minsk',
      description: 'Наш салон в Минске',
      address: {
        country: 'Беларусь',
        latlng: [57.76, 38.64],
        full: 'Минск, Веры Хоружей 6Б, павильон 125',
      },
      contact: {
        phone: '+375 29 156 06 00',
        email: 'minsk@vessna.by',
        website: 'https://vessna-minsk.by',
        social: {
          pinterest: '',
          instagram: 'https://instagram.com/vessna_dress',
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
