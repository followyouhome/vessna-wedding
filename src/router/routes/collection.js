import * as ROUTES from '@/../config/constants';

export default [{
  // name: ROUTES.PAGE_DRESS_COLLECTION_HUB, //Avoid creation of additional root-level page
  path: '/prom-and-party-dresses',
  component: () => import(/* webpackChunkName: "page-dress-collection-hub" */ '@/components/pages/collection/page-dress-collection-hub.vue'),
},
{
  name: ROUTES.PAGE_DRESS_COLLECTION_PROM,
  path: '/prom-and-party-dresses/:slug',
  component: () => import(/* webpackChunkName: "page-dress-collection" */ '@/components/pages/collection/page-dress-collection.vue'),
},
{
  // name: ROUTES.PAGE_DRESS_COLLECTION_HUB, //Avoid creation of additional root-level page
  path: '/wedding-dresses',
  component: () => import(/* webpackChunkName: "page-dress-collection-hub" */ '@/components/pages/collection/page-dress-collection-hub.vue'),
},
{
  name: ROUTES.PAGE_DRESS_COLLECTION_WEDDING,
  path: '/wedding-dresses/:slug',
  component: () => import(/* webpackChunkName: "page-dress-collection" */ '@/components/pages/collection/page-dress-collection.vue'),
},
{
  name: ROUTES.PAGE_DRESS_COLLECTION_CAPSULE,
  path: '/capsule-collection/:slug',
  component: () => import(/* webpackChunkName: "page-dress-collection" */ '@/components/pages/collection/page-dress-collection.vue'),
},
{
  name: ROUTES.PAGE_DRESS_COLLECTION,
  path: '/collection/:slug',
  component: () => import(/* webpackChunkName: "page-dress-collection" */ '@/components/pages/collection/page-dress-collection.vue'),
}];
