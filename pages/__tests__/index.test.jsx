import React from 'react';
import { shallow } from 'enzyme';
import Index from '../index';

describe('pages/index', () => {
  it('renders an index page', () => {
    expect(shallow(<Index />)).toMatchSnapshot();
  });
});
