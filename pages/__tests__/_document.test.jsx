import React from 'react';
import { shallow } from 'enzyme';
import Document from '../_document';

describe('pages/_document', () => {
  it('renders an the Document', () => {
    expect(shallow(<Document />)).toMatchSnapshot();
  });
});
