import React from 'react';
import 'jest-styled-components';
import { render } from 'enzyme';
import NavBar from '../../NavBar';

describe('conestellations/NavBar', () => {
  it('renders a <NavBar /> with some links', () => {
    expect(render(
      <NavBar
        links={[
          { href: '/', children: 'About', key: 'about' },
          { href: '/', children: 'Home', key: 'home' },
        ]}
      />,
    )).toMatchSnapshot();
  });
});
