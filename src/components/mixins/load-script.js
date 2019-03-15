export default {
  methods: {
    loadScript (id, url) {
      if (!window.document.getElementById(id)) {
        const script = window.document.createElement('script');

        script.setAttribute('id', id);
        script.setAttribute('src', url);

        window.document.head.appendChild(script);
      }
    },
  },
};
