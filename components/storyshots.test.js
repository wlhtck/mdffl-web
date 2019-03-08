import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import { createSerializer } from 'enzyme-to-json';
import { styleSheetSerializer } from 'jest-styled-components/serializer';
import { render } from 'enzyme';

initStoryshots({
  test: multiSnapshotWithOptions({}),
  renderer: render,
  snapshotSerializers: [createSerializer(), styleSheetSerializer],
});
