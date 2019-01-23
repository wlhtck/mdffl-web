import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';
import Button from '../Button';

describe('components/starts/Button', () => {
  it('renders an interal link', () => {
    expect(mount(<Button text="Button" url="/about" />)).toMatchSnapshot();
  });

  it('renders an external link', () => {
    expect(mount(<Button text="Button" url="https://google.com" external />)).toMatchSnapshot();
  });

  it('renders a button', () => {
    expect(mount(<Button text="Button" onClick={() => {}} />)).toMatchSnapshot();
  });

  it('renders a secondary button', () => {
    expect(mount(<Button text="Button" type="secondary" />)).toMatchSnapshot();
  });
});
