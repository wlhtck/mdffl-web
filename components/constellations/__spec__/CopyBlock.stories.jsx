import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import CopyBlock from '../CopyBlock';
import { textAlignments } from '../../../test/constants';

storiesOf('Constellations|CopyBlock', module)
  .add('Without a CTA', () => (
    <CopyBlock
      body={text(
        'body',
        'The Metro Detroit Flag Football League (MDFFL) is an LGBT and straight allied flag football league, changing preconceived societal beliefs about sexual orientation and self-identification.',
        'CopyBlock',
      )}
      headline={text('headline', 'Mission Statement', 'CopyBlock')}
      textAlign={select('textAlign', textAlignments, 'center', 'CopyBlock')}
    />
  ))
  .add('With a CTA', () => (
    <CopyBlock
      body={text(
        'body',
        'We are a LGBT friendly league. It’s a very competitive league so bring your A-game.',
        'CopyBlock',
      )}
      cta={{
        href: text('href', '/about', 'CTA'),
        children: text('children', 'LEARN MORE', 'CTA'),
        external: boolean('external', false, 'CTA'),
      }}
      headline={text('headline', '"About Us', 'CopyBlock')}
      textAlign={select('textAlign', textAlignments, 'left', 'CopyBlock')}
    />
  ));
