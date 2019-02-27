import React from 'react';
import 'jest-styled-components';
import { render } from 'enzyme';
import Button from '../../Button';

describe('components/starts/Button', () => {
  it('renders an interal link', () => {
    expect(render(<Button href="/about">Button</Button>)).toMatchSnapshot();
  });

  it('renders an external link', () => {
    expect(render(<Button href="https://google.com" external>Button</Button>)).toMatchSnapshot();
  });

  it('renders a button', () => {
    expect(render(<Button onClick={() => {}}>Button</Button>)).toMatchSnapshot();
  });

  it('renders a secondary button', () => {
    expect(render(<Button type="secondary">Button</Button>)).toMatchSnapshot();
  });
});
