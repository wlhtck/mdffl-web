import React from 'react';
import { render } from 'enzyme';
import FeatureHeadline from '../../Typography/FeatureHeadline';

describe('nebulas/Typography/FeatureHeadline', () => {
  it('renders a <Headine />', () => {
    expect(render(<FeatureHeadline>Mission Statement</FeatureHeadline>)).toMatchSnapshot();
  });
});
