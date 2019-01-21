import React from 'react';
import { mount } from 'enzyme';
import Index from '../index';

describe('pages/index', () => {
  it('renders an index page', () => {
    expect(mount(<Index router={{ query: { slug: 'index' } }} />)).toMatchSnapshot();
  });
});
