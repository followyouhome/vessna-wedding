import {
  POPUP_SET, POPUP_UNSET, POPUP_RESET,
} from '../mutation-types.js';

const state = {
  item: null,
};

const actions = {

};

const mutations = {
  [POPUP_SET] (state, { popup }) {
    document.body.style.overflow = 'hidden';
    state.item = popup;
  },

  [POPUP_UNSET] (state) {
    document.body.style.overflow = 'auto';
    state.item = null;
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
