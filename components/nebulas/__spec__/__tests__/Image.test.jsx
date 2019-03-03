import React from 'react';
import 'jest-styled-components';
import { render } from 'enzyme';
import Image from '../../Image';

describe('componenets/nebulas/Image', () => {
  describe('Image', () => {
    it('renders a <Image />', () => {
      expect(render(
        <Image
          src="https://images.unsplash.com/photo-1545906785-193d7758ba91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          alt="Bear"
        />,
      )).toMatchSnapshot();
    });

    it('renders a <Image fullWidth/>', () => {
      expect(render(
        <Image
          fullWidth
          src="https://images.unsplash.com/photo-1545906785-193d7758ba91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
          alt="Bear"
        />,
      )).toMatchSnapshot();
    });
  });
});
