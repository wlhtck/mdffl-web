import React from 'react';
import styled from 'styled-components';
import { string, exact, bool } from 'prop-types';
import Col from '../nebulas/Col';
import { Headline, BodyCopy } from '../nebulas/Typography';
import Button from '../stars/Button';

const HeroBlock = ({
  headline, body, cta, className,
}) => (
  <div className={className}>
    <Col align="flex-start">
      <Headline>{headline}</Headline>
      <BodyCopy inverted>{body}</BodyCopy>
      <Button {...cta} type="secondary" />
    </Col>
  </div>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vw;
  align-items: flex-start;
  background:
    /* top, transparent red, faked with gradient */
    linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    /* bottom, image */
    ${({ imgSrc }) => `url("${imgSrc}")`};
  background-size: cover;
  width: 80vw;
  height: calc(100vh - 20vw);
`;

StyledHeroBlock.propTypes = {
  imgSrc: string.isRequired,
};

export default StyledHeroBlock;
