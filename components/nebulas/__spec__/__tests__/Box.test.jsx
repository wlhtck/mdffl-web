import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import Box from '../../Box';

describe('components/nebulas/box', () => {
  it('renders a <Box />', () => {
    expect(shallow(<Box />)).toMatchSnapshot();
  });
  it('renders a black <Box />', () => {
    expect(shallow(<Box color="#000" />)).toMatchSnapshot();
  });
});
