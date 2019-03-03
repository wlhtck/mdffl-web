import React from 'react';
import { render } from 'enzyme';
import Headline from '../../Typography/Headline';

describe('nebulas/Typography/Headline', () => {
  it('renders a <Headine />', () => {
    expect(render(<Headline>Ready 2 Ball?</Headline>)).toMatchSnapshot();
  });
});
