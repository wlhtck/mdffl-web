import React from 'react';
import { storiesOf } from '@storybook/react';
import HeroBlock from '../HeroBlock';

storiesOf('Constellations', module)
  .add('HeroBlock', () => (
    <HeroBlock
      headline="Check out the bear!"
      body="The bear is super cool and everyone loves him! Click below to find out more!"
      imageAlign="right"
      textAlign="left"
      imgSrc="https://images.unsplash.com/photo-1541560584704-f2767960951a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1856&q=80"
      cta={{
        url: 'https://google.com',
        text: 'Google',
        external: true,
      }}
    />
  ));
