import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import HeroBlock from '../HeroBlock';

describe('components/constellations/HeroBlock', () => {
  it('renders a <HeroBlock />', () => {
    expect(mount(
      <HeroBlock
        headline="Check out the bear!"
        body="The bear is super cool and everyone loves him! Click below to find out more!"
        imageAlign="right"
        textAlign="left"
        imgSrc="/imgSrc"
        cta={{
          url: '/register',
          text: 'Google',
          external: true,
        }}
      />,
    )).toMatchSnapshot();
  });
});
