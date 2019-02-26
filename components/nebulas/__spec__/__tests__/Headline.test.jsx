import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import Headline from '../../Typography/Headline';

describe('nebulas/Typography/Headline', () => {
  it('renders a <Headine />', () => {
    expect(mount(<Headline>Ready 2 Ball?</Headline>)).toMatchSnapshot();
  });
});
