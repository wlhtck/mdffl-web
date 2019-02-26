import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import FeatureHeadline from '../../Typography/FeatureHeadline';

describe('nebulas/Typography/FeatureHeadline', () => {
  it('renders a <Headine />', () => {
    expect(mount(<FeatureHeadline>Mission Statement</FeatureHeadline>)).toMatchSnapshot();
  });
});
