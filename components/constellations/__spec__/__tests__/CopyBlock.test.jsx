import React from 'react';
import { render } from 'enzyme';
import ContentBlockCopy from '../../CopyBlock';

describe('components/constellations/ContentBlock/Copy', () => {
  it('renders <ContentBlockCopy /> with a CTA', () => {
    expect(render(
      <ContentBlockCopy
        headline="About Us"
        body="We are a LGBT friendly league. It’s a very competitive league so bring your A-game."
        cta={{
          href: '/about',
          children: 'LEARN MORE',
          external: false,
        }}
      />,
    )).toMatchSnapshot();
  });
  it('renders <ContentBlockCopy /> without a CTA', () => {
    expect(render(
      <ContentBlockCopy
        headline="Mission Statement"
        textAlign="left"
        body="
        The Metro Detroit Flag Football League (MDFFL) is an LGBT and straight allied flag football
        league, changing preconceived societal beliefs about sexual orientation and
        self-identification.
        "
      />,
    )).toMatchSnapshot();
  });
});
