import React from 'react';
import { storiesOf } from '@storybook/react';
import CopyBlock from '../CopyBlock';

storiesOf('CopyBlock', module)
  .add('Without a CTA', () => (
    <CopyBlock
      headline="Mission Statement"
      textAlign="center"
      body="
      The Metro Detroit Flag Football League (MDFFL) is an LGBT and straight allied flag football
      league, changing preconceived societal beliefs about sexual orientation and
      self-identification.
      "
    />
  ))
  .add('With a CTA', () => (
    <CopyBlock
      headline="About Us"
      body="We are a LGBT friendly league. It’s a very competitive league so bring your A-game."
      cta={{
        href: '/about',
        children: 'LEARN MORE',
        external: false,
      }}
    />
  ));
