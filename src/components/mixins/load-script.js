export default {
  methods: {
    loadScript (id, url) {
      return new Promise(async (resolve, reject) => {
        if (!window.document.getElementById(id)) {
          const script = window.document.createElement('script');

          script.setAttribute('id', id);
          script.setAttribute('src', url);

          script.onload = () => {
            return resolve();
          };

          script.onerror = () => {
            return reject();
          };

          window.document.head.appendChild(script);
        } else {
          return resolve();
        }
      });
    },
  },
};
