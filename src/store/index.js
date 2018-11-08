import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import actions from './actions';
import mutations from './mutations';

import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,

  modules: {
    config: {},
    pages: {},
    user,
  },

  state,
  actions,
  mutations,
});
