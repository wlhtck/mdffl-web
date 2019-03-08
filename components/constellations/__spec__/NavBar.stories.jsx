import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../NavBar';

storiesOf('Constellations', module)
  .add('NavBar', () => (
    <NavBar
      links={[
        { href: 'https://www.mdffl.org/about', children: 'About', key: 'about' },
        { href: 'https://www.mdffl.org', children: 'Home', key: 'home' },
      ]}
    />
  ));
