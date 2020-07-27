import { addDecorator } from '@storybook/vue';
import StoryRouter from 'storybook-vue-router';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import NoSSR from 'vue-no-ssr';
import VueLazyload from 'vue-lazyload';

import '../styles/fonts.scss';
import '../styles/layout.scss';

import CaptchaGoogle from '../components/atoms/captcha-google.vue';
import ImageDeferred from '../components/atoms/image-deferred.vue';
import SimpleButton from '../components/atoms/simple-button';
import VideoRegular from '../components/atoms/video-regular.vue';
import VectorIcon from '../components/atoms/vector-icon.vue';
import VectorLogo from '../components/atoms/vector-logo.vue';
import IconToggle from '../components/atoms/icon-toggle.vue';
import AtomLink from '../components/atoms/atom-link/atom-link.vue';

addDecorator(StoryRouter());

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueLazyload);

Vue.component('no-ssr', NoSSR);
Vue.component('captcha-google', CaptchaGoogle);
Vue.component('image-deferred', ImageDeferred);
Vue.component('video-regular', VideoRegular);
Vue.component('simple-button', SimpleButton);
Vue.component('vector-icon', VectorIcon);
Vue.component('vector-logo', VectorLogo);
Vue.component('icon-toggle', IconToggle);
Vue.component('atom-link', AtomLink);
