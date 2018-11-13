import * as ROUTES from '@/../config/constants';

export default [{
  name: ROUTES.PAGE_NEWS_HUB,
  path: '/news',
  component: () => import('@/components/pages/news/page-news-hub.vue'),
}, {
  name: ROUTES.PAGE_NEWS,
  path: '/news/:news',
  component: () => import('@/components/pages/news/page-news.vue'),
}];
