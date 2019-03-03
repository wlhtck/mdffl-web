import React from 'react';
import 'jest-styled-components';
import { render } from 'enzyme';
import HeroBlock from '../../HeroBlock';

describe('components/constellations/HeroBlock', () => {
  it('renders a <HeroBlock />', () => {
    expect(render(
      <HeroBlock
        headline="Check out the bear!"
        body="The bear is super cool and everyone loves him! Click below to find out more!"
        imageAlign="right"
        textAlign="left"
        imgSrc="/imgSrc"
        cta={{
          href: '/register',
          children: 'Google',
          external: true,
        }}
      />,
    )).toMatchSnapshot();
  });
});
