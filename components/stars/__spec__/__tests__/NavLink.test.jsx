import React from 'react';
import 'jest-styled-components';
import { render } from 'enzyme';
import NavLink from '../../NavLink';

describe('components/starts/NavLink', () => {
  it('renders a link', () => {
    expect(render(<NavLink href="/about">Button</NavLink>)).toMatchSnapshot();
  });
});
