import React from 'react';
import { storiesOf } from '@storybook/react';
import Box from '../../Box';
import Image from '../../Image';

storiesOf('Nebulas', module)
  .add('Image', () => (
    <Image
      src="https://images.unsplash.com/photo-1545906785-193d7758ba91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      alt="Bear"
    />
  ));
