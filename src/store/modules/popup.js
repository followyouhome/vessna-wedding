import {
  POPUP_SET, POPUP_UNSET, POPUP_RESET,
} from '../mutation-types.js';

const state = {
  item: null,
  payload: null,
};

const actions = {

};

const mutations = {
  [POPUP_SET] (state, { popup, payload }) {
    document.body.style.overflow = 'hidden';
    state.item = popup;
    state.payload = payload;
  },

  [POPUP_UNSET] (state) {
    document.body.style.overflow = 'auto';
    state.item = null;
    state.payload = null;
  },

  [POPUP_RESET] (state) {
    state = state;
  },
};

export default {
  state,
  actions,
  mutations,
};
