import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import Col from '../Col';

describe('components/nebulas/Col', () => {
  it('renders a default <Col />', () => {
    expect(shallow(<Col />)).toMatchSnapshot();
  });

  it('renders a flex-start <Col />', () => {
    expect(shallow(<Col align="flex-start" />)).toMatchSnapshot();
  });

  it('renders a flex-end <Col />', () => {
    expect(shallow(<Col align="flex-end" />)).toMatchSnapshot();
  });

  it('renders a reverse <Col />', () => {
    expect(shallow(<Col reverse />)).toMatchSnapshot();
  });

  it('renders a padded <Col />', () => {
    expect(shallow(<Col padding={100} />)).toMatchSnapshot();
  });
});
