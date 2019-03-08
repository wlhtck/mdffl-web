import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  text, boolean, select,
} from '@storybook/addon-knobs';
import HeroBlock from '../HeroBlock';
import { images } from '../../../test/constants';

storiesOf('Constellations|HeroBlock', module)
  .add('Default', () => {
    const props = {
      headline: text('headline', 'Ready 2 Ball?', 'HeroBlock'),
      body: text(
        'body',
        'Welcome to the Metro Detroit Flag Football League. The 2019 season is upon us. If you want to play with us, click below to register.',
        'HeroBlock',
      ),
      imgSrc: select(
        'background',
        images,
        '//images.ctfassets.net/8wpi5cmhr3lg/PLDH0id61xTjbGlkiuEKU/7089fadc5e542e1407b79eb11842aa10/34174836_10156493014667146_2406702400535527424_o.jpg',
        'HeroBlock',
      ),
      cta: {
        href: text(
          'href',
          'https://www.playyon.com/metro-detroit-flag-football-league/registrations/',
          'CTA',
        ),
        children: text('children', 'Google', 'CTA'),
        external: boolean('external', true, 'CTA'),
      },
    };

    return <HeroBlock {...props} />;
  });
