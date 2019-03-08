import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../../../nebulas/Box';
import { primary } from '../../../nebulas/colors';
import NavLink from '../../NavLink';

storiesOf('Stars', module)
  .add('NavLink', () => (
    <Box color={primary}>
      <NavLink url="/home">Home</NavLink>
    </Box>
  ));
