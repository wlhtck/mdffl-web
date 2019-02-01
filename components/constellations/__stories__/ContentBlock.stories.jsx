import React from 'react';
import { storiesOf } from '@storybook/react';
import ContentBlock from '../ContentBlock';

storiesOf('Constellations', module)
  .add('ContentBlock', () => (
    <div>
      <ContentBlock
        headline="Check out the bear!"
        body="The bear is super cool and everyone loves him! Click below to find out more!"
        imageAlign="right"
        textAlign="left"
        image={{
          src: 'https://images.unsplash.com/photo-1541560584704-f2767960951a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1856&q=80',
          alt: 'Bear',
        }}
        cta={{
          link: 'https://google.com',
          text: 'Google',
          external: true,
        }}
      />
      <ContentBlock
        headline="Check out the bear!"
        body="The bear is super cool and everyone loves him! Click below to find out more!"
        textAlign="center"
        cta={{
          link: 'https://google.com',
          text: 'Google',
          external: true,
        }}
      />
      <ContentBlock
        headline="Check out the bear!"
        body="The bear is super cool and everyone loves him! Click below to find out more!"
        imageAlign="left"
        textAlign="left"
        image={{
          src: 'https://images.unsplash.com/photo-1541560584704-f2767960951a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1856&q=80',
          alt: 'Bear',
        }}
        cta={{
          link: 'https://google.com',
          text: 'Google',
          external: true,
        }}
      />
    </div>
  ));
