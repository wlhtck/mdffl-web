import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import NavBar from '../../NavBar';

describe('conestellations/NavBar', () => {
  it('renders a <NavBar /> with some links', () => {
    expect(mount(
      <NavBar
        links={[
          { url: '/', text: 'About', key: 'about' },
          { url: '/', text: 'Home', key: 'home' },
        ]}
      />,
    )).toMatchSnapshot();
  });
});
