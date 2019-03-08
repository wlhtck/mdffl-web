import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Headline from '../Headline';
import TestBlock from '../../../test/components/TestBlock';

storiesOf('Nebulas|Headline', module)
  .add('default', () => (
    <TestBlock color="black">
      <Headline>{text('children', 'Headline', 'Headline')}</Headline>
    </TestBlock>
  ));
