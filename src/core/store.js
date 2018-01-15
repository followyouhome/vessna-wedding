import axios from 'axios';
import config from '../../config';
import Vue from 'vue';
import Vuex from 'vuex';

const base = config.api.base || '/api';

const settings = {
  proxy: { port: config.port },
};

Vue.use(Vuex);

const actions = {
  login(store, { email, password }) {
    return axios
      .post(base + '/user/login', { email, password }, settings)
      .then(({ data }) => {
        store.commit('replaceItems', { namespace: 'user', data, global: true });
        return data;
      })
      .catch(err => {
        console.error(err);
      });
  },

  fetch(store, { endpoint, namespace, id, params, global }) {
    if (!namespace) {
      namespace = endpoint;
    }

    let uri = base + '/' + endpoint;

    if (id) {
      uri += '/' + id;
    }

    return axios
      .get(uri, Object.assign({ params }, settings))
      .then(function ({ data }) {
        if (id && !global) {
          store.commit('setItem', { namespace, id, data });
          store.commit('setMainPromo', { namespace, id, data });
        } else {
          store.commit('replaceItems', { namespace, data, global });
        }
      })
      .catch(err => {
        console.error(err);
      });
  },

  fetchAll(store, { endpoint, namespace }) {
    if (!namespace) {
      namespace = endpoint;
    }

    let uri = base + '/' + endpoint;

    return axios
      .get(uri, settings)
      .then(function ({ data }) {
        store.commit('replaceItems', { namespace, data });
      })
      .catch(err => {
        console.error(err);
      });
  },

  fetchMain (store, { endpoint, namespace, id }) {
    if (!namespace) {
      namespace = endpoint;
    }

    let uri = base + '/' + endpoint;

    if (id) {
      uri += '/' + id;
    }

    return axios
      .get(uri, settings)
      .then(function ({ data }) {
        if (id) {
          store.commit('setItem', { namespace, id, data });
          store.commit('setMainPromo', { namespace, id, data });
        }
      })
      .catch(err => {
        console.error(err);
      });
  },

  fetchPage (store, { id }) {
    const namespace = 'pages';
    const endpoint = 'pages';

    let uri = base + '/' + endpoint;

    if (id) {
      uri += '/' + id;
    }

    return axios
      .get(uri, settings)
      .then(function ({ data }) {
        if (id) {
          store.commit('setItem', { namespace, id, data });
          store.commit('setMainPromo', { namespace, id, data });
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
};

const mutations = {

  setItem (state, { namespace, id, data }) {
    // const idx = state[namespace].findIndex(item => item._id === id);

    // if (idx > 0) {
      state[namespace][id] = data;
    // } else {
    //   state[namespace].push(data);
    // }
  },

  setMainPromo (state, { namespace, id, data }) {
    if (data.main_promo && data.main_promo.media !='null') {
      state.main_promo = data.main_promo;
    } else {
      state.main_promo = null;
    }
  },

  replaceItems (state, { namespace, data, global }) {
    if (global) {
      state.global[namespace] = Object.assign({}, data);
    } else {
      state[namespace] = data;
    }
  },
};

if (__VUE_ENV__ === 'server' && Vue.cookies) {
  settings.headers = { cookie: Vue.cookies.getCookieString() };
}

export default new Vuex.Store({
  namespaced: true,
  state: {
    global: {
      user: {
        _id: Vue.cookies && Vue.cookies.get('uid') || '',
      },
    },
    items: [],
    'dress-collection': {},
    main_promo: null,
  },
  modules: {
    config: {},
    pages: {},
  },

  actions,
  mutations,
});
