import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from '../Footer';

storiesOf('Constellations|Footer', module)
  .add('Default', () => (
    <Footer
      links={[{
        name: 'National Gay Flag Football League',
        href: 'https://www.ngffl.com',
        src: '//images.ctfassets.net/8wpi5cmhr3lg/3vav1MAl8T6Io9AeGuZXed/49aea86886b52bca03f79d1f68f29918/ngffl-logo.png',
        key: 'ngffl',
      }, {
        name: 'Powered by Contentful',
        href: 'https://www.contentful.com/',
        src: '//images.ctfassets.net/8wpi5cmhr3lg/5TZTlbZ4mn7dMnA0PRKTPk/8de5d2aa3d6a61cfaf7958d7c8ff119e/PoweredByContentful_DarkBackground_MonochromeLogo.svg',
        key: 'contentful',
      }]}
    />
  ));
