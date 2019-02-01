import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import NavLink from '../NavLink';

describe('components/starts/NavLink', () => {
  it('renders a link', () => {
    expect(mount(<NavLink text="Button" url="/about" />)).toMatchSnapshot();
  });
});
