import axios from 'axios';
import {
  USER_LOGIN, USER_LOGOUT, USER_SUBSCRIBE, USER_UNSUBSCRIBE,
} from '../mutation-types.js';

import Vue from 'vue';

import config from '../../../config';

const base = '/api';

const settings = {
  proxy: { port: config.port },
};

if (__VUE_ENV__ === 'server' && Vue.cookies) {
  settings.headers = { cookie: Vue.cookies.getCookieString() };
}

const state = {};

const actions = {
  login(store, { email, password }) {
    return axios
      .post(base + '/user/login', { email, password })
      .then(({ data }) => {
        store.commit(USER_LOGIN, data);
      })
      .catch(err => {
        return err;
      });
  },

  logout(store) {
    return axios
      .post(base + '/user/logout', {})
      .then(({ data }) => {
        store.commit(USER_LOGOUT);
        return data;
      })
      .catch(err => {
        return err;
      });
  },

  registration(store, payload) {
    return axios
      .post(base + '/user/signup', payload)
      .then(({ data }) => {
        store.commit('replaceItems', { namespace: 'user', data, global: true });
        return data;
      })
      .catch(err => {
        return err;
      });
  },

  subscribe(store, payload) {
    return axios
      .post(base + '/forms/subscribe', payload, settings)
      .then(response => {
        this.commit(USER_SUBSCRIBE);

        return Promise.resolve(response);
      })
      .catch(error => {
        this.commit(USER_UNSUBSCRIBE);

        return Promise.reject(error);
      });
  },
};

const mutations = {
  [USER_LOGIN] (state, payload) {
    Vue.cookies.set('uid', data._id);

    return data;
  },

  [USER_LOGOUT] () {

  },

  [USER_SUBSCRIBE] (state) {
    state.subscribed = true;
  },

  [USER_UNSUBSCRIBE] (state) {
    state.subscribed = false;
  },
};

export default {
  state,
  actions,
  mutations,
};
