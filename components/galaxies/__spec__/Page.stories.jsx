import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from '../Page';
import data from './page.data';

storiesOf('Galaxies|Page', module)
  .add('Home Page', () => (<Page data={data.home} />))
  .add('About Page', () => (<Page data={data.about} />));
