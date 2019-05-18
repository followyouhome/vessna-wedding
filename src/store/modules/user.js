import axios from 'axios';
import {
  USER_LOGIN, USER_LOGOUT, USER_UPDATE, USER_SUBSCRIBE, USER_UNSUBSCRIBE,
} from '../mutation-types.js';

import Vue from 'vue';

const base = '/api';

const settings = {
  proxy: { port: process.env.PORT, host: 'localhost' },
};

if (__VUE_ENV__ === 'server' && Vue.cookies) {
  settings.headers = { cookie: Vue.cookies.getCookieString() };
}

const state = {
  uid: null,
  name: null,
  info: null,
  email: null,
  access: null,
};

const getters = {
  isUserAvailable (state) {
    return !!(state.uid && state.email);
  },
};

const actions = {
  login (store, { email, password }) {
    return axios
      .post(base + `/user/login`, { email, password })
      .then(({ data }) => {
        setTimeout(() => {
          store.commit(USER_LOGIN, data);
        }, 3000);
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },

  logout (store) {
    return axios
      .post(base + '/user/logout', {})
      .then(() => {
        store.commit(USER_LOGOUT);
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },

  registration (store, payload) {
    return axios
      .post(base + '/user/signup', payload)
      .then(({ data }) => {
        store.commit(USER_LOGIN, data);
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },

  settings (store, payload) {
    return axios
      .post(base + '/user/settings', payload)
      .then(({ data }) => {
        store.commit(USER_UPDATE, data);
        return Promise.resolve(data);
      })
      .catch(err => {
        return Promise.reject(err);
      });
  },

  subscribe (store, payload) {
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

  feedback (store, payload) {
    return axios
      .post(base + '/forms/feedback', payload, settings)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },

  cooperate (store, payload) {
    return axios
      .post(base + '/forms/cooperation', payload, settings)
      .then(response => {
        return Promise.resolve(response);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  },
};

const mutations = {
  [USER_LOGIN] (state, user) {
    Vue.set(state, 'uid',  user.uid);
    Vue.set(state, 'name',  user.name);
    Vue.set(state, 'info',  user.info);
    Vue.set(state, 'email',  user.email);
    Vue.set(state, 'access',  user.access);
  },

  [USER_LOGOUT] (state) {
    Vue.set(state, 'uid',  null);
    Vue.set(state, 'name', null);
    Vue.set(state, 'info', null);
    Vue.set(state, 'email', null);
    Vue.set(state, 'access', null);
  },

  [USER_UPDATE] (state, user) {
    Vue.set(state, 'uid',  user.uid);
    Vue.set(state, 'name',  user.name);
    Vue.set(state, 'info',  user.info);
    Vue.set(state, 'email',  user.email);
    Vue.set(state, 'access',  user.access);
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
  getters,
  actions,
  mutations,
};
