import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import Row from '../Row';

describe('components/nebulas/Row', () => {
  it('renders a default <Row />', () => {
    expect(shallow(<Row />)).toMatchSnapshot();
  });

  it('renders a reversed <Row />', () => {
    expect(shallow(<Row reverse />)).toMatchSnapshot();
  });

  it('renders a padded <Row />', () => {
    expect(shallow(<Row padding={100} />)).toMatchSnapshot();
  });
});
