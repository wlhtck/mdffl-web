import React from 'react';
import { string, bool } from 'prop-types';
import { storiesOf } from '@storybook/react';
import TestBlock from '../../../test/components/TestBlock';
import {
  primary, secondary, black, grey, white,
} from '../colors';
import BodyCopy from '../Typography/BodyCopy';
import FeatureHeadline from '../Typography/FeatureHeadline';

const ColorBlock = ({
  color, hex, inverted, name,
}) => (
  <TestBlock color={color}>
    <FeatureHeadline inverted={inverted}>{name}</FeatureHeadline>
    <BodyCopy inverted={inverted}>{hex}</BodyCopy>
  </TestBlock>
);

ColorBlock.propTypes = {
  color: string.isRequired,
  hex: string.isRequired,
  inverted: bool,
  name: string.isRequired,
};

ColorBlock.defaultProps = {
  inverted: false,
};

storiesOf('Nebulas|Colors', module)
  .add('Primary', () => (
    <ColorBlock inverted color="primary" hex={primary} name="Primary" />
  ))
  .add('Secondary', () => (
    <ColorBlock inverted color="secondary" hex={secondary} name="Secondary" />
  ))
  .add('Black', () => (
    <ColorBlock inverted color="black" hex={black} name="Black" />
  ))
  .add('Grey', () => (
    <ColorBlock color="grey" hex={grey} name="Grey" />
  ))
  .add('White', () => (
    <ColorBlock color="white" hex={white} name="White" />
  ));
