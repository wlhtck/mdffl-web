import React from 'react';
import { map, get } from 'lodash/fp';
import { Container } from 'styled-shoelaces';
import ContentBlock from '../constellations/ContentBlock';
import HeroBlock from '../constellations/HeroBlock';
import NavBar from '../constellations/NavBar';
import Footer from '../constellations/Footer';

const ContentComponents = {
  heroBlock: HeroBlock,
  contentBlock: ContentBlock,
};

const Page = ({
  data, headerLinks, footerLinks, ...rest
}) => console.log(data, headerLinks, footerLinks, rest) || (
  <>
    <NavBar links={headerLinks} />
    <Container fluid>
      {map((content) => {
        const Component = ContentComponents[get('type', content)];

        return (
          <Component {...content} />
        );
      }, data)}
    </Container>
    <Footer links={footerLinks} />
  </>
);

export default Page;
