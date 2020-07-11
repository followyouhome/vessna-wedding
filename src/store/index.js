import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import popup from './modules/popup';
import track from './modules/track';
import user from './modules/user';
import config from '@/../config';

Vue.use(Vuex);

const base = config.api.base;
const settings = {
  proxy: { port: process.env.PORT, host: 'localhost' },
};

const state = {};

const getters = {
  amp (state) {
    return state.settings && state.settings.amp;
  },
};

const actions = {
  fetch (store, { endpoint, namespace, id, params, global }) {
    if (!namespace) {
      namespace = endpoint;
    }

    let uri = base + '/' + endpoint;

    if (id) {
      uri += '/' + id;
    }

    if (__VUE_ENV__ === 'server' && Vue.cookies) {
      settings.headers = { cookie: Vue.cookies.getCookieString() };
    }

    return axios
      .get(uri, Object.assign({ params }, settings))
      .then(function ({ data }) {
        if (id && !global) {
          store.commit('setItem', { namespace, id, data });
        } else {
          store.commit('replaceItems', { namespace, data, global });
        }
      })
      .catch(err => {
        console.error(err);
      });
  },

  fetchAll (store, { endpoint, namespace }) {
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
          store.commit(MAIN_PROMO_SET, { namespace, id, data });
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
};

const mutations = {
  setItem (state, { namespace, id, data }) {
    Vue.set(state, `${namespace}.${id}`,  data);
    // state[namespace][id] = data;
  },

  replaceItems (state, { namespace, data, global }) {
    if (global) {
      Vue.set(state.global, namespace, data);
    } else {
      Vue.set(state, namespace, data);
    }
  },
};

export default new Vuex.Store({
  namespaced: true,

  modules: {
    popup,
    track,
    user,
  },

  state,
  getters,
  actions,
  mutations,
});
