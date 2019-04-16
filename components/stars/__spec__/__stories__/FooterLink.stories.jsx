import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import FooterLink from '../../FooterLink';
import TestBlock from '../../../../test/components/TestBlock';
import { logos } from '../../../../test/constants';

storiesOf('Stars|FooterLink', module)
  .add('default', () => (
    <TestBlock color="primary">
      <FooterLink
        name={text('alt', 'National Gay Flag Football League', 'FooterLink')}
        href={text('href', 'http://www.ngffl.com/', 'FooterLink')}
        src={select(
          'src',
          logos,
          '//images.ctfassets.net/8wpi5cmhr3lg/3vav1MAl8T6Io9AeGuZXed/49aea86886b52bca03f79d1f68f29918/ngffl-logo.png',
          'FooterLink',
        )}
      />
    </TestBlock>
  ));
