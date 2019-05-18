import Vue from 'vue';
import Router from 'vue-router';

import * as ROUTES from '../../config/constants';

Vue.use(Router);

import user from '@/router/routes/user.js';
import news from '@/router/routes/news.js';
import collection from '@/router/routes/collection.js';

export function createRouter () {
  const router = new Router({
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
      {
        name: 'page-error-forbidden',
        path: '/404',
        component: () => import(/* webpackChunkName: "page-not-found" */ '@/components/pages/page-error.vue'),
      },
      {
        name: 'page-error-not-found',
        path: '*',
        component: () => import(/* webpackChunkName: "page-not-found" */ '@/components/pages/page-error.vue'),
      },
    ],
  });

  router.beforeEach((to, from, next) => {
    const user = __VUE_ENV__ === 'client' ? Vue.cookie.get('uid') : router.app.$store.getters.isUserAvailable;

    if (to.matched.some(record => record.meta.auth) && !user) {
      next({
          name: 'page-error-forbidden',
      });
    }

    next();
  });

  return router;
}
