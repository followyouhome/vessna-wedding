import {
  POPUP_SET, POPUP_UNSET,
  MAIN_PROMO_SET,
} from './mutation-types.js';

export default {
  [POPUP_SET] () {

  },

  [POPUP_UNSET] () {

  },

  [MAIN_PROMO_SET] (state, { namespace, id, data }) {
    if (data.main_promo && data.main_promo.media !='null') {
      state.main_promo = data.main_promo;
    } else {
      state.main_promo = null;
    }
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
