import React from 'react';
import styled from 'styled-components';
import {
  bool, string, exact, oneOf,
} from 'prop-types';
import Button from '../stars/Button';
import Image from '../nebulas/Image';
import { grey } from '../nebulas/colors';
import { FeatureHeadline, BodyCopy } from '../nebulas/Typography';
import { Row, Col } from '../nebulas/styled-shoelaces';

const textAlignments = {
  left: 'start',
  right: 'end',
  center: 'center',
};
const Container = styled.div`
  padding: 50px;
  @media (min-width: 62em) {
    padding: 32px 100px 0;
  }
  ${({ center }) => (center ? 'text-align: center' : '')}
`;

const ContentBlock = ({
  image, headline, body, textAlign, imageAlign, cta, className,
}) => (
  <Row reverse={imageAlign === 'right'} className={className} gutter="0">
    {image && (
      <Col xs={1} lg={1 / 2} gutter="0">
        <Image {...image} fullWidth />
      </Col>
    )}
    <Col
      xs={1}
      lg={1 / (image ? 2 : 1)}
      alignItems={textAlignments[textAlign]}
      justifyContent="center"
      gutter="0"
    >
      <Container center={!image}>
        <FeatureHeadline>{headline}</FeatureHeadline>
        <BodyCopy textAlign={textAlign}>{body}</BodyCopy>
        {cta && <Button {...cta} type="primary" />}
      </Container>
    </Col>
  </Row>
);

ContentBlock.propTypes = {
  body: string.isRequired,
  className: string,
  cta: exact({
    url: string.isRequired,
    text: string.isRequired,
    external: bool,
  }),
  image: exact({
    src: string,
    alt: string,
  }),
  headline: string.isRequired,
  imageAlign: oneOf(['left', 'right']),
  textAlign: oneOf(['left', 'right', 'center']),
};

ContentBlock.defaultProps = {
  cta: null,
  className: '',
  image: null,
  imageAlign: 'right',
  textAlign: 'left',
};

const StyledContentBlock = styled(ContentBlock)`
  overflow: hidden;
  ${({ background }) => (background ? `background-color: ${grey};` : '')}
`;

StyledContentBlock.propTypes = {
  background: bool,
};

StyledContentBlock.defaultProps = {
  background: false,
};

export default StyledContentBlock;
