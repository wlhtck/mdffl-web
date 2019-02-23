import React from 'react';
import styled from 'styled-components';
import { string, exact, bool } from 'prop-types';
import { Row, Col } from '../nebulas/styled-shoelaces';
import { Headline, BodyCopy } from '../nebulas/Typography';
import Button from '../stars/Button';

const HeroBlock = ({
  headline, body, cta, className,
}) => (
  <Row alignContent="center" justifyContent="start" className={className} gutter="0">
    <Col xs={1} lg={1 / 2} alignItems="start" gutter="0">
      <Headline>{headline}</Headline>
      <BodyCopy inverted>{body}</BodyCopy>
      <Button {...cta} type="secondary" />
    </Col>
  </Row>
);

HeroBlock.propTypes = {
  className: string,
  body: string.isRequired,
  cta: exact({
    url: string.isRequired,
    text: string.isRequired,
    external: bool,
  }).isRequired,
  headline: string.isRequired,
};

HeroBlock.defaultProps = {
  className: '',
};

const StyledHeroBlock = styled(HeroBlock)`
  padding: 50px;
  @media (min-width: 62em) {
    padding:100px;
  }
  background:
    /* top, transparent red, faked with gradient */
    linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    /* bottom, image */
    ${({ imgSrc }) => `url("${imgSrc}")`};
  background-size: cover;
  background-position: center;
  height: calc(100vh - 98px);
`;

StyledHeroBlock.propTypes = {
  imgSrc: string.isRequired,
};

export default StyledHeroBlock;
