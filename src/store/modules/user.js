import axios from 'axios';
import {
  USER_LOGIN, USER_LOGOUT,
} from '../mutation-types.js';

const base = '/api';

const state = {
  uid: null,
};

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
        store.commit('USER_LOGOUT');
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
};

const mutations = {
  [USER_LOGIN] (state, payload) {
    Vue.cookies.set('uid', data._id);

    return data;
  },

  [USER_LOGOUT] () {

  },
};

export default {
  state,
  actions,
  mutations,
};
