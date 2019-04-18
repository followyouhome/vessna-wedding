import {
  TRACK_SET_YANDEX, TRACK_SET_GOOGLE, TRACK_FORM_OPEN, TRACK_USER_LOGIN, TRACK_USER_REGISTRATION,
} from '../mutation-types.js';

const state = {
  activity: [],
  yandex: null,
  google: null,
};

const getters = {

};

const actions = {

};

const mutations = {
  [TRACK_SET_YANDEX] (state, { yandex }) {
    state.yandex = yandex;
  },

  [TRACK_SET_GOOGLE] (state, { google }) {
    state.google = google;
  },

  [TRACK_FORM_OPEN] (state) {
    if (state.yandex) {
      state.yandex.reachGoal(TRACK_FORM_OPEN);
    }

    state.activity.push(TRACK_FORM_OPEN);
  },

  [TRACK_USER_LOGIN] (state) {
    if (state.yandex) {
      state.yandex.reachGoal(TRACK_USER_LOGIN);
    }

    state.activity.push(TRACK_USER_LOGIN);
  },

  [TRACK_USER_REGISTRATION] (state) {
    if (state.yandex) {
      state.yandex.reachGoal(TRACK_USER_REGISTRATION);
    }

    state.activity.push(TRACK_USER_REGISTRATION);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
