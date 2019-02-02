import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  primary, secondary, black, grey, white,
} from '../../colors';
import { BodyCopy } from '../../Typography';
import Box from '../../Box';

storiesOf('Nebulas', module)
  .add('colors', () => (
    <div>
      <Box color={primary}>
        <BodyCopy inverted>
          Primary
          <br />
          #1C104E
        </BodyCopy>
      </Box>
      <Box color={secondary}>
        <BodyCopy inverted>
          Secondary
          <br />
          #F5A623
        </BodyCopy>
      </Box>
      <Box color={black}>
        <BodyCopy inverted>
          Black
          <br />
          #303133
        </BodyCopy>
      </Box>
      <Box color={grey}>
        <BodyCopy inverted>
          Grey
          <br />
          #8D8D8F
        </BodyCopy>
      </Box>
      <Box color={white} textColor={black}>
        <BodyCopy>
          White
          <br />
          #FFFFFF
        </BodyCopy>
      </Box>
    </div>
  ));
