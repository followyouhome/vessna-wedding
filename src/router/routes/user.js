export default [{
  name: 'page-user-login',
  path: '/user/login',
  component: () => import('@/components/pages/page-user-login.vue'),
}, {
  name: 'page-user-registration',
  path: '/user/registartion',
  component: () => import('@/components/pages/page-user-registration.vue'),
}, {
  name: 'page-user-settings',
  path: '/user/settings',
  component: () => import('@/components/pages/page-user-settings.vue'),
}];
