import { configure } from '@storybook/vue';

import { storiesOf, addDecorator } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text } from "@storybook/addon-knobs/vue";

// Import our helper
import { registerStories } from "vue-storybook";

// Import custom plugins and decorators
import Vue from 'vue';
import NoSSR from 'vue-no-ssr';
import VueCookie from 'vue-cookie';
import VueLazyload from 'vue-lazyload';
import BootstrapVue from 'bootstrap-vue';
import StoryRouter from 'storybook-vue-router';

// Import custom stylesheets
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueCookie);
Vue.use(VueLazyload);
Vue.use(BootstrapVue);

Vue.component('no-ssr', NoSSR);

// Require the Vue SFC with <story> blocks inside
const atoms = require.context("../components/atoms", true, /\.vue$/);
const promo = require.context("../components/promo", true, /\.vue$/);
const forms = require.context("../components/forms", true, /\.vue$/);
const popup = require.context("../components/popup", true, /\.vue$/);
const module = require.context("../components/module", true, /\.vue$/);

addDecorator(StoryRouter());

// Programatically register these stories
function loadStories () {
  [atoms, promo, forms, popup, module].forEach(group => {
    group.keys().forEach(filename => {
      registerStories(group, filename, storiesOf, {
        withKnobs,
        withNotes,
        action,
        text,
      });
    });
  });
}

loadStories();

configure(loadStories, module);
