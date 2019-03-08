import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, text } from '@storybook/addon-knobs';
import Image from '../Image';
import { images } from '../../../test/constants';

storiesOf('Nebulas|Image', module)
  .add('default', () => (
    <Image
      src={select(
        'src',
        images,
        '//images.ctfassets.net/8wpi5cmhr3lg/2st4Tarcs6i1sDh179cHrT/3dc3fca955cf57417e4195c2a4d09c03/Team_Dynamics.png',
        'Image',
      )}
      alt={text('alt', 'Team celebrating victory', 'Image')}
      fullWidth={boolean('fullWidth', false, 'Image')}
    />
  ))
  .add('fullWidth', () => (
    <Image
      src={select(
        'src',
        images,
        '//images.ctfassets.net/8wpi5cmhr3lg/1n0TZGOHyEuCdYH5bXDlSJ/a076437829dacd40410c9599d53b5e96/About_Us.png',
        'Image',
      )}
      alt={text('alt', 'Players walking', 'Image')}
      fullWidth={boolean('fullWidth', true, 'Image')}
    />
  ));
