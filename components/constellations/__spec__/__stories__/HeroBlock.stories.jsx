import React from 'react';
import { storiesOf } from '@storybook/react';
import HeroBlock from '../../HeroBlock';

storiesOf('Constellations', module)
  .add('HeroBlock', () => (
    <HeroBlock
      headline="Check out the bear!"
      body="The bear is super cool and everyone loves him! Click below to find out more!"
      imgSrc="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1440&q=80"
      cta={{
        href: 'https://google.com',
        children: 'Google',
        external: true,
      }}
    />
  ));
