import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import CTA from '../../CTA';
import TestBlock from '../../../../test/components/TestBlock';

storiesOf('Stars|CTA', module)
  .add('primary', () => (
    <TestBlock>
      <CTA type="primary">{text('children', 'Primary', 'CTA')}</CTA>
    </TestBlock>
  ))
  .add('secondary', () => (
    <TestBlock color="black">
      <CTA type="secondary">{text('children', 'Secondary', 'CTA')}</CTA>
    </TestBlock>
  ));
