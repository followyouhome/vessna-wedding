import {
  POPUP_SET, POPUP_UNSET, POPUP_RESET,
  MAIN_PROMO_SET,
  USER_LOGIN, USER_LOGOUT,
} from './mutation-types.js';

export default {
  [POPUP_SET] (state, { popup }) {
    document.body.style.overflow = 'hidden';
    state.popup = popup;
  },

  [POPUP_UNSET] (state) {
    document.body.style.overflow = 'auto';
    state.popup = null;
  },

  [POPUP_RESET] (state) {
    state = state;
  },

  [MAIN_PROMO_SET] (state, { namespace, id, data }) {
    if (data.main_promo && data.main_promo.media !='null') {
      state.main_promo = data.main_promo;
    } else {
      state.main_promo = null;
    }
  },

  [USER_LOGIN] (state, user) {
    state.global.user = {'kek': 1};
  },

  [USER_LOGOUT] (state) {
    state.global.user = null;
    Vue.cookies.remove('uid');
  },

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