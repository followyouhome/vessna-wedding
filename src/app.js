import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueCookie from 'vue-cookie';
import VueLazyload from 'vue-lazyload';
import BootstrapVue from 'bootstrap-vue';
import { sync } from 'vuex-router-sync';
import root from './app.vue';
import store from './store/';
import { createRouter } from './router/';

Vue.use(VueMeta);
Vue.use(VueCookie);
Vue.use(VueLazyload);
Vue.use(BootstrapVue);

export function createApp () {

  const router = createRouter(store);

  sync(store, router);

  const app = new Vue({ router, store, render: h => h(root) });

  Vue.config.devtools = true;

  return { app, root, router, store };
}
