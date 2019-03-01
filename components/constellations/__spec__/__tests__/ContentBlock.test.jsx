import React from 'react';
import { render } from 'enzyme';
import ContentBlock from '../../ContentBlock';

describe('components/constellations/ContentBlock', () => {
  it('Renders a <ContentBlock /> with no image', () => {
    expect(render(
      <ContentBlock
        headline="Test ContentBlock"
        body="ContentBlock is sooooooo coool and awesome!"
      />,
    )).toMatchSnapshot();
  });

  it('Renders a <ContentBlock /> with an Image', () => {
    expect(render(
      <ContentBlock
        headline="Test ContentBlock"
        body="ContentBlock is sooooooo coool and awesome!"
        image={{ src: 'path/to/image', alt: 'Cool image!' }}
      />,
    )).toMatchSnapshot();
  });

  it('Renders a <ContentBlock /> with a CTA', () => {
    expect(render(
      <ContentBlock
        headline="Test ContentBlock"
        body="ContentBlock is sooooooo coool and awesome!"
        cta={{ url: 'path/to/link', text: 'Click here!', external: false }}
      />,
    )).toMatchSnapshot();
  });

  it('Renders a <ContentBlock /> with an right imageAlign and left textAlign', () => {
    expect(render(
      <ContentBlock
        headline="Test ContentBlock"
        body="ContentBlock is sooooooo coool and awesome!"
        image={{ src: 'path/to/image', alt: 'Cool image!' }}
        textAlign="left"
        imageAlign="right"
      />,
    )).toMatchSnapshot();
  });

  it('Renders a <ContentBlock /> with a grey background', () => {
    expect(render(
      <ContentBlock
        background
        headline="Test ContentBlock"
        body="ContentBlock is sooooooo coool and awesome!"
        image={{ src: 'path/to/image', alt: 'Cool image!' }}
      />,
    )).toMatchSnapshot();
  });
});
