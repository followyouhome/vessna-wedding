import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

storiesOf('Button', module)
  .add('as a component', () => ({
    template: '<button>KEK</button>',
  }));
