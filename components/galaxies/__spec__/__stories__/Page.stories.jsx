import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../../Page';
import data from '../page.data';

storiesOf('Galaxies', module)
  .add('Page', () => (<Page data={data.page} />));
