import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import FeatureHeadline from '../../Typography/FeatureHeadline';
import TestBlock from '../../../../test/components/TestBlock';

storiesOf('Nebulas|Typography.FeatureHeadline', module)
  .add('default', () => (
    <TestBlock>
      <FeatureHeadline>
        {text('children', 'FeatureHeadline', 'FeatureHeadline')}
      </FeatureHeadline>
    </TestBlock>
  ))
  .add('inverted', () => (
    <TestBlock color="black">
      <FeatureHeadline inverted>
        {text('children', 'FeatureHeadline', 'FeatureHeadline')}
      </FeatureHeadline>
    </TestBlock>
  ));
