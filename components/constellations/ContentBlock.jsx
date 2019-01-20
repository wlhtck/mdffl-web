import React from 'react';
import styled from 'styled-components';
import {
  bool, string, exact, oneOf,
} from 'prop-types';
import Button from '../stars/Button';
import Image from '../nebulas/Image';
import { FeatureHeadline, BodyCopy } from '../nebulas/Typography';
import Col from '../nebulas/Col';
import Row from '../nebulas/Row';

const textAlignments = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

const ContentBlock = ({
  image, headline, copy, textAlign, imageAlign, cta,
}) => (
  <Row reverse={imageAlign === 'right'}>
    {image && (
      <Col>
        <Image {...image} />
      </Col>
    )}
    <Col align={textAlignments[textAlign]} padding={65}>
      <FeatureHeadline>{headline}</FeatureHeadline>
      <BodyCopy textAlign={textAlign}>{copy}</BodyCopy>
      {cta && <Button {...cta} type="primary" />}
    </Col>
  </Row>
);

ContentBlock.propTypes = {
  className: string,
  copy: string.isRequired,
  cta: exact({
    link: string,
    text: string,
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
  className: '',
  cta: null,
  image: null,
  imageAlign: 'right',
  textAlign: 'left',
};

export default ContentBlock;
