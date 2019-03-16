export default {
  data () {
    return {
      map: {
        api: null,
        placemarks: [],
      },
    };
  },

  methods: {
    initMap (id, settings, items) {
      window.ymaps.ready(() => {
        this.map.api = new ymaps.Map(this.yandexMapsId, {
            controls: settings.controls,
            center: settings.center,
            zoom: settings.zoom,
        });

        items.forEach(item => {
          const placemark = this.generateMapPlacemark(item, this.onPlacemarkClick);

          this.map.api.geoObjects.add(placemark);
        });
      });
    },

    generateMapPlacemark (item, callback) {
      const placemark = new ymaps.Placemark(item.address.latlng, {
        id: item.name,
        hintContent: item.name,
      });

      placemark.events.add(['click'], callback);

      this.map.placemarks.push(placemark);

      return placemark;
    },

    moveMapToLatLng (latlng) {
      this.map.api.setZoom(7);
      this.map.api.panTo(latlng, {
        flying: 1,
      });
    },

    onPlacemarkClick (event) {
      console.log(event);
    },
  },
};
