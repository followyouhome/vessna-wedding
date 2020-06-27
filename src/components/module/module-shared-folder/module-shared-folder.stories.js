import { text } from '@storybook/addon-knobs';
import ModuleSharedFolder from './module-shared-folder.vue';

export default {
  title: 'Module/Shared Folder',
	component: ModuleSharedFolder,
};

export const Default = () => ({
	components: { ModuleSharedFolder },
  template: `
    <module-shared-folder
      :resources="resources"
    />
	`,
  props: {
    resources: {
      default: text('Resources', 'https://disk.yandex.by'),
    },
  },
});
