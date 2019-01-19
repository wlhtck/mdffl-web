import React from 'react';
import { shallow } from 'enzyme';
import Document from '../_document';

describe('pages/index', () => {
  it('renders an the Document', () => {
    expect(shallow(<Document />)).toMatchSnapshot();
  });
});
