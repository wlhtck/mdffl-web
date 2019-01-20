import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import ContentBlock from '../ContentBlock';

describe('components/constellations/ContentBlock', () => {
  it('Renders a <ContentBlock /> with no image', () => {
    expect(shallow(
      <ContentBlock
        headline="Test ContentBlock"
        copy="ContentBlock is sooooooo coool and awesome!"
      />,
    )).toMatchSnapshot();
  });

  it('Renders a <ContentBlock /> with an Image', () => {
    expect(shallow(
      <ContentBlock
        headline="Test ContentBlock"
        copy="ContentBlock is sooooooo coool and awesome!"
        image={{ src: 'path/to/image', alt: 'Cool image!' }}
      />,
    )).toMatchSnapshot();
  });

  it('Renders a <ContentBlock /> with a CTA', () => {
    expect(shallow(
      <ContentBlock
        headline="Test ContentBlock"
        copy="ContentBlock is sooooooo coool and awesome!"
        cta={{ link: 'path/to/link', text: 'Click here!', external: false }}
      />,
    )).toMatchSnapshot();
  });

  it('Renders a <ContentBlock /> with an right imageAlign and left textAlign', () => {
    expect(shallow(
      <ContentBlock
        headline="Test ContentBlock"
        copy="ContentBlock is sooooooo coool and awesome!"
        image={{ src: 'path/to/image', alt: 'Cool image!' }}
        textAlign="left"
        imageAlign="right"
      />,
    )).toMatchSnapshot();
  });
});
