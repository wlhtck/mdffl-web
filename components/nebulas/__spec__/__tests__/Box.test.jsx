import React from 'react';
import 'jest-styled-components';
import { render } from 'enzyme';
import Box from '../../Box';

describe('components/nebulas/box', () => {
  it('renders a <Box />', () => {
    expect(render(<Box />)).toMatchSnapshot();
  });
  it('renders a black <Box />', () => {
    expect(render(<Box color="#000" />)).toMatchSnapshot();
  });
});
