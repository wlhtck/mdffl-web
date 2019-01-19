import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { Headline, FeatureHeadline, BodyCopy } from '../Typography';

describe('componenets/nebulas/Typography', () => {
  describe('Headline', () => {
    it('renders a <Headline />', () => {
      expect(shallow(<Headline>Headline</Headline>)).toMatchSnapshot();
    });
  });

  describe('FeatureHeadline', () => {
    it('renders a  <FeatureHeadline />', () => {
      expect(shallow(<FeatureHeadline>Feature Headline</FeatureHeadline>)).toMatchSnapshot();
    });
  });

  describe('BodyCopy', () => {
    it('renders a <BodyCopy />', () => {
      expect(shallow(<BodyCopy>Body Copy</BodyCopy>)).toMatchSnapshot();
    });

    it('renders an inverted <BodyCopy />', () => {
      expect(shallow(<BodyCopy inverted>Body Copy</BodyCopy>)).toMatchSnapshot();
    });
  });
});
