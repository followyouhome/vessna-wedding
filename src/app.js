import Vue from 'vue';
import App from './app.vue';
import Meta from 'vue-meta';
import VueCookie from 'vue-cookie';
import {createRouter} from './core/router';
import store from './core/store/';
import {sync} from 'vuex-router-sync';

Vue.config.devtools = true;


export function createApp() {
  // const store = createStore();
  const router = createRouter(store);

  sync(store, router);

  Vue.use(Meta);
  Vue.use(VueCookie);

  const app = new Vue({router, store, render: h => h(App)});

  Vue.config.devtools = true;

  return {app, router, store};
}
