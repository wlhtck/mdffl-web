import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';
import BodyCopy from '../../Typography/BodyCopy';

describe('nebulas/Typography/BodyCopy', () => {
  it('renders a <BodyCopy />', () => {
    expect(mount(
      <BodyCopy>
        The Metro Detroit Flag Football League (MDFFL) is an LGBT and straight allied flag football
        league, changing preconceived societal beliefs about sexual orientation and
        self-identification.
      </BodyCopy>,
    )).toMatchSnapshot();
  });
});
