import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import user from './modules/user';
import popup from './modules/popup';
import config from '../../config';

Vue.use(Vuex);

const settings = {
  proxy: { port: process.env.PORT, host: '127.0.0.1' },
};

if (__VUE_ENV__ === 'server' && Vue.cookies) {
  settings.headers = { cookie: Vue.cookies.getCookieString() };
}

const base = '/api';

const state = {

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

    // settings.headers = { cookie: Vue.cookies.getCookieString() };

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
    // const idx = state[namespace].findIndex(item => item._id === id);

    // if (idx > 0) {
      state[namespace][id] = data;
    // } else {
    //   state[namespace].push(data);
    // }
  },

  replaceItems (state, { namespace, data, global }) {
    if (global) {
      state.global[namespace] = Object.assign({}, data);
    } else {
      state[namespace] = data;
    }
  },
};

export default new Vuex.Store({
  namespaced: true,

  modules: {
    user,
    popup,
  },

  state,
  actions,
  mutations,
});
