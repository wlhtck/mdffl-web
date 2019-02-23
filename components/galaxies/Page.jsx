import React from 'react';
import { map, get } from 'lodash/fp';
import { Container } from 'styled-shoelaces';
import ContentBlock from '../constellations/ContentBlock';
import HeroBlock from '../constellations/HeroBlock';

const ContentComponents = {
  heroBlock: HeroBlock,
  contentBlock: ContentBlock,
};

const Page = ({ data }) => (
  <Container fluid>
    {map((content) => {
      const Component = ContentComponents[get('type')(content)];

      return (
        <Component {...content} />
      );
    })(data)}
  </Container>
);

export default Page;
