import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import {
  primary, secondary, black, grey, white,
} from '../colors';

// TODO: Implement this story with a better component when one exists

const Box = styled.div`
  display: inline-block;
  margin: 20px;
  padding: 10px;
  height: 100px;
  width: 100px;
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor || 'white'};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

storiesOf('Foundations')
  .add('colors', () => (
    <div>
      <Box color={primary}>
        Primary
        <br />
        #1C104E
      </Box>
      <Box color={secondary}>
        Secondary
        <br />
        #F5A623
      </Box>
      <Box color={black}>
        Black
        <br />
        #303133
      </Box>
      <Box color={grey}>
        Grey
        <br />
        #8D8D8F
      </Box>
      <Box color={white} textColor={black}>
        White
        <br />
        #FFFFFF
      </Box>
    </div>
  ));
