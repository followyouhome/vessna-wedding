import Vuex from 'vuex';
import { array } from '@storybook/addon-knobs';
import ModuleCollectionControl from './module-collection-control.vue';

export default {
  title: 'Module/Collection Control',
	component: ModuleCollectionControl,
};

export const Default = () => ({
	components: { ModuleCollectionControl },
  template: `
    <module-collection-control :items="items"/>
	`,
  props: {
    items: {
      default: array('Items', [{
        price: {
          usd: 10,
        },
      }, {
        price: {
          usd: 20,
        },
      }]),
    },
  },
  store: new Vuex.Store({
    state: {
      user: {
        access: {
          currency: 'USD',
        },
      },
    },
  }),
});
