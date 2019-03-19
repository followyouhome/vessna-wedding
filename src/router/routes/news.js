import * as ROUTES from '@/../config/constants';

export default [{
  name: ROUTES.PAGE_NEWS_HUB,
  path: '/news',
  component: () => import(/* webpackChunkName: "page-news-hub" */ '@/components/pages/news/page-news-hub.vue'),
}, {
  name: ROUTES.PAGE_NEWS,
  path: '/news/:slug',
  component: () => import(/* webpackChunkName: "page-news" */ '@/components/pages/news/page-news.vue'),
}];
