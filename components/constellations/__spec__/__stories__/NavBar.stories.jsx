import React from 'react';
import { storiesOf } from '@storybook/react';
import NavBar from '../../NavBar';

storiesOf('Constellations', module)
  .add('NavBar', () => (
    <NavBar
      links={[
        { url: '/', text: 'About', key: 'about' },
        { url: '/', text: 'Home', key: 'home' },
      ]}
    />
  ));
