import {
  USER_LOGIN, USER_LOGOUT, USER_UPDATE, USER_SUBSCRIBE, USER_UNSUBSCRIBE,
} from '../mutation-types.js';

import Vue from 'vue';

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
