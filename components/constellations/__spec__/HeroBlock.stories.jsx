import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  text, boolean, select,
} from '@storybook/addon-knobs';
import HeroBlock from '../HeroBlock';

const images = {
  image1: '//images.ctfassets.net/8wpi5cmhr3lg/2st4Tarcs6i1sDh179cHrT/3dc3fca955cf57417e4195c2a4d09c03/Team_Dynamics.png',
  image2: '//images.ctfassets.net/8wpi5cmhr3lg/1n0TZGOHyEuCdYH5bXDlSJ/a076437829dacd40410c9599d53b5e96/About_Us.png',
  image3: '//images.ctfassets.net/8wpi5cmhr3lg/6mW6Tsx5scOYMwocwSskKq/f6222cdd29472f569283df0d4ca0f348/About_Us_Picture.png',
  image4: '//images.ctfassets.net/8wpi5cmhr3lg/PLDH0id61xTjbGlkiuEKU/7089fadc5e542e1407b79eb11842aa10/34174836_10156493014667146_2406702400535527424_o.jpg',
};

storiesOf('HeroBlock', module)
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
