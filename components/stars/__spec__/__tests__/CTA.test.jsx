import React from 'react';
import { render } from 'enzyme';
import CTA from '../../CTA';

describe('components/starts/CTA', () => {
  it('renders an interal link', () => {
    expect(render(<CTA href="/about">CTA</CTA>)).toMatchSnapshot();
  });

  it('renders an external link', () => {
    expect(render(<CTA href="https://google.com" external>CTA</CTA>)).toMatchSnapshot();
  });

  it('renders a button', () => {
    expect(render(<CTA onClick={() => {}}>CTA</CTA>)).toMatchSnapshot();
  });

  it('renders a secondary button', () => {
    expect(render(<CTA type="secondary">CTA</CTA>)).toMatchSnapshot();
  });
});
