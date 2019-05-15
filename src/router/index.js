import Vue from 'vue';
import Router from 'vue-router';

import * as ROUTES from '../../config/constants';

Vue.use(Router);

import user from '@/router/routes/user.js';
import news from '@/router/routes/news.js';
import collection from '@/router/routes/collection.js';

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        name: ROUTES.PAGE_HOMEPAGE,
        path: '/',
        component: () => import(/* webpackChunkName: "page-homepage" */ '../components/pages/page-homepage.vue'),
      },
      {
        name: 'page-contact',
        path: '/contact',
        component: () => import(/* webpackChunkName: "page-contact" */ '@/components/pages/page-contact.vue'),
      },
      {
        name: 'page-about',
        path: '/about',
        component: () => import(/* webpackChunkName: "page-about" */ '@/components/pages/page-about.vue'),
      },
      {
        name: 'page-partnership',
        path: '/partnership',
        component: () => import(/* webpackChunkName: "page-partnership" */ '@/components/pages/page-partnership.vue'),
      },
      ...collection,
      ...user,
      ...news,
    ],
  });
}
