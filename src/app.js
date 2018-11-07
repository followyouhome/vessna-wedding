import Vue from 'vue';
import App from './app.vue';
import VueMeta from 'vue-meta';
import VueCookie from 'vue-cookie';
import VueLazyload from 'vue-lazyload';
import {createRouter} from './core/router';
import store from './store/';
import {sync} from 'vuex-router-sync';

Vue.config.devtools = true;

Vue.use(VueMeta);
Vue.use(VueCookie);
Vue.use(VueLazyload);

export function createApp() {

  const router = createRouter(store);

  sync(store, router);

  const app = new Vue({router, store, render: h => h(App)});

  Vue.config.devtools = true;

  return {app, router, store};
}
