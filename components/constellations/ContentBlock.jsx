import React from 'react';
import styled from 'styled-components';
import {
  bool, string, exact, oneOf,
} from 'prop-types';
import Button from '../stars/Button';
import Image from '../nebulas/Image';
import { grey } from '../nebulas/colors';
import { FeatureHeadline, BodyCopy } from '../nebulas/Typography';
import Col from '../nebulas/Col';
import Row from '../nebulas/Row';

const textAlignments = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

const ContentBlock = ({
  image, headline, body, textAlign, imageAlign, cta, className,
}) => (
  <Row reverse={imageAlign === 'right'} className={className}>
    {image && (
      <Col>
        <Image {...image} fullWidth />
      </Col>
    )}
    <Col align={textAlignments[textAlign]} padding={65}>
      <FeatureHeadline>{headline}</FeatureHeadline>
      <BodyCopy textAlign={textAlign}>{body}</BodyCopy>
      {cta && <Button {...cta} type="primary" />}
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
  ${({ background }) => (background ? `background-color: ${grey};` : '')}
`;

StyledContentBlock.propTypes = {
  background: bool,
};

StyledContentBlock.defaultProps = {
  background: false,
};

export default StyledContentBlock;
