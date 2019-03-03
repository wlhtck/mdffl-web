import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  primary, secondary, black, grey, white,
} from '../../colors';
import BodyCopy from '../../Typography/BodyCopy';
import Box from '../../Box';

storiesOf('Nebulas', module)
  .add('colors', () => (
    <div>
      <Box color={primary}>
        <BodyCopy inverted>
          Primary
        </BodyCopy>
      </Box>
      <Box color={secondary}>
        <BodyCopy inverted>
          Secondary
        </BodyCopy>
      </Box>
      <Box color={black}>
        <BodyCopy inverted>
          Black
        </BodyCopy>
      </Box>
      <Box color={grey}>
        <BodyCopy>
          Grey
        </BodyCopy>
      </Box>
      <Box color={white} textColor={black}>
        <BodyCopy>
          White
        </BodyCopy>
      </Box>
    </div>
  ));
