import React from 'react';
import 'jest-styled-components';
import { render } from 'enzyme';
import NavBar from '../../NavBar';

describe('conestellations/NavBar', () => {
  it('renders a <NavBar /> with some links', () => {
    expect(render(
      <NavBar
        links={[
          { url: '/', text: 'About', key: 'about' },
          { url: '/', text: 'Home', key: 'home' },
        ]}
      />,
    )).toMatchSnapshot();
  });
});
