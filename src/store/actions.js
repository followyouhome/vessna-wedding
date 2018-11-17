import axios from 'axios';

import Vue from 'vue';

import {
  MAIN_PROMO_SET,
  USER_LOGOUT,
} from './mutation-types';

import config from '../../config';

const settings = {
  proxy: { port: config.port },
};

if (__VUE_ENV__ === 'server' && Vue.cookies) {
  settings.headers = { cookie: Vue.cookies.getCookieString() };
}

const base = config.api.base || '/api';

export default {
  subscribe(store, payload) {
    return axios
      .post(base + '/forms/subscribe', payload, settings)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
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

    // settings.headers = { cookie: Vue.cookies.getCookieString() };

    return axios
      .get(uri, Object.assign({ params }, settings))
      .then(function ({ data }) {
        if (id && !global) {
          store.commit('setItem', { namespace, id, data });
          store.commit(MAIN_PROMO_SET, { namespace, id, data });
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
          store.commit(MAIN_PROMO_SET, { namespace, id, data });
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
};
