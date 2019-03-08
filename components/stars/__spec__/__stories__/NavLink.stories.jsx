import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import NavLink from '../../NavLink';
import TestBlock from '../../../../test/components/TestBlock';

storiesOf('Stars|NavLink', module)
  .add('default', () => (
    <TestBlock color="primary">
      <NavLink href={text('href', 'https://mdffl.org', 'NavLink')}>{text('children', 'Home', 'NavLink')}</NavLink>
    </TestBlock>
  ));
