import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../../NavBar';

storiesOf('Constellations', module)
  .add('NavBar', () => (
    <NavBar
      links={[
        { href: '/', children: 'About', key: 'about' },
        { href: '/', children: 'Home', key: 'home' },
      ]}
    />
  ));
