import { configure } from '@storybook/vue';

import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs, text } from "@storybook/addon-knobs/vue";

// Import our helper
import { registerStories } from "vue-storybook";

import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload);

// Require the Vue SFC with <story> blocks inside
const atoms = require.context("../components/atoms", true, /\.vue$/);
const promo = require.context("../components/promo", true, /\.vue$/);
const forms = require.context("../components/forms", true, /\.vue$/);
const module = require.context("../components/module", true, /\.vue$/);


// Programatically register these stories
function loadStories () {
  [atoms, promo, forms, module].forEach(group => {
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
