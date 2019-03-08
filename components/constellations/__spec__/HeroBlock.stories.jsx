import React from 'react';
import { storiesOf } from '@storybook/react';
import HeroBlock from '../HeroBlock';

storiesOf('HeroBlock', module)
  .add('Default', () => (
    <HeroBlock
      headline="Ready 2 Ball?"
      body="
      Welcome to the Metro Detroit Flag Football League. The 2019 season is upon us. If you want
      to play with us, click below to register.
      "
      imgSrc="//images.ctfassets.net/8wpi5cmhr3lg/PLDH0id61xTjbGlkiuEKU/7089fadc5e542e1407b79eb11842aa10/34174836_10156493014667146_2406702400535527424_o.jpg"
      cta={{
        href: '/register',
        children: 'Google',
        external: true,
      }}
    />
  ));
