import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';
import Box from '../../nebulas/Box';
import { black } from '../../nebulas/colors';

storiesOf('Stars')
  .add('Button', () => (
    <div>
      <Box>
        <Button type="primary" text="Primary" />
      </Box>
      <Box color={black}>
        <Button type="secondary" text="Secondary" />
      </Box>
    </div>
  ));
