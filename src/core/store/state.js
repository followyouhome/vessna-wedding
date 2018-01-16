import Vue from 'vue';

export default {
  global: {
    popup: null,
    user: {
      _id: Vue.cookies && Vue.cookies.get('uid') || '',
    },
  },
  items: [],
  'dress-collection': {},
  main_promo: null,
};
