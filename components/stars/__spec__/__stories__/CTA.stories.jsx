import React from 'react';
import { storiesOf } from '@storybook/react';
import CTA from '../../CTA';
import Box from '../../../nebulas/Box';
import { black } from '../../../nebulas/colors';

storiesOf('Stars', module)
  .add('CTA', () => (
    <div>
      <Box>
        <CTA type="primary">Primary</CTA>
      </Box>
      <Box color={black}>
        <CTA type="secondary">Secondary</CTA>
      </Box>
    </div>
  ));
