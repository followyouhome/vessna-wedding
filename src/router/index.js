import axios from 'axios';
import Vue from 'vue';
import Router from 'vue-router';
import config from '../../config';
import keystoneConfig from '../../config/keystone.config';

import * as ROUTES from '../../config/constants';

Vue.use(Router);

import b2b from '@/router/routes/b2b.js';
import user from '@/router/routes/user.js';

export function createRouter (store) {
  return new Router({
    mode: 'history',
    routes: [
      // Static pages
      {
        name: ROUTES.PAGE_HOMEPAGE,
        path: '/',
        component: () => import('../components/pages/page-homepage.vue'),
      },
      // {
      //   name: ROUTES.PAGE_CONTACT,
      //   path: '/contact',
      //   component: () => import('../components/pages/page-homepage.vue')
      // },
      // {
      //   name: ROUTES.PAGE_LANDING,
      //   path: '/:slug',
      //   component: () => import('../components/pages/page-homepage.vue')
      // },

      // News pages
      {
        name: ROUTES.PAGE_NEWS_HUB,
        path: '/news',
        component: () => import('../components/pages/page-news-hub.vue'),
      },
      {
        name: ROUTES.PAGE_NEWS,
        path: '/news/:news',
        component: () => import('../components/pages/page-news.vue'),
      },

      // Dress pages
      {
        // name: ROUTES.PAGE_DRESS_COLLECTION_HUB, //Avoid creation of additional root-level page
        path: '/prom-and-party-dresses',
        component: () => import('../components/pages/page-dress-collection-hub.vue'),
      },
      {
        name: ROUTES.PAGE_DRESS_COLLECTION_PROM,
        path: '/prom-and-party-dresses/:collection',
        component: () => import('../components/pages/page-dress-collection.vue'),
      },
      {
        // name: ROUTES.PAGE_DRESS_COLLECTION_HUB, //Avoid creation of additional root-level page
        path: '/wedding-dresses',
        component: () => import('../components/pages/page-dress-collection-hub.vue'),
      },
      {
        name: ROUTES.PAGE_DRESS_COLLECTION_WEDDING,
        path: '/wedding-dresses/:collection',
        component: () => import('../components/pages/page-dress-collection.vue'),
      },
      {
        name: ROUTES.PAGE_DRESS_COLLECTION_CAPSULE,
        path: '/capsule-collection/:collection',
        component: () => import('../components/pages/page-dress-collection.vue'),
      },
      {
        name: ROUTES.PAGE_DRESS_COLLECTION,
        path: '/collection/:collection',
        component: () => import('../components/pages/page-dress-collection.vue'),
      },


      /*------------------------*/

      ...b2b,
      ...user,


      // {
      //   name: 'logout',
      //   path: '/user/logout',
      //   beforeEnter: (to, from, next) => {
      //     if (!store.state.global.user._id) {
      //       return next(keystoneConfig['signout redirect']);
      //     }

      //     axios
      //       .post(config.api.base + '/user/logout', { proxy: { port: config.port } })
      //       .then(() => {
      //         next(keystoneConfig['signout redirect']);
      //         store.state.global.user._id = null;
      //       })
      //       .catch(error => console.log(error));
      //   }
      // },
      // {
      //   name: 'profile',
      //   path: '/user/profile',
      //   component: () => import('../components/profile.vue'),
      //   beforeEnter: (to, from, next) => {
      //     if (!store.state.global.user._id) {
      //       return next(keystoneConfig['signin url']);
      //     }

      //     next();
      //   }
      // }
    ],
  });
}
