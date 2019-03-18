import axios from 'axios';
import Vue from 'vue';
import Router from 'vue-router';
import config from '../../config';
import keystoneConfig from '../../config/keystone.config';

import * as ROUTES from '../../config/constants';

Vue.use(Router);

import b2b from '@/router/routes/b2b.js';
import user from '@/router/routes/user.js';
import news from '@/router/routes/news.js';
import collection from '@/router/routes/collection.js';

export function createRouter (store) {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: ROUTES.PAGE_HOMEPAGE,
        path: '/',
        component: () => import(/* webpackChunkName: "page-homepage" */ '../components/pages/page-homepage.vue'),
      },
      ...collection,
      ...user,
      ...news,
      ...b2b,
    ],
  });
}
