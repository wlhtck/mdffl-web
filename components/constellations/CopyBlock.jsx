import React from 'react';
import {
  bool, exact, oneOf, string,
} from 'prop-types';
import { withProps, compose } from 'recompose';
import BodyCopy from '../nebulas/Typography/BodyCopy';
import FeatureHeadline from '../nebulas/Typography/FeatureHeadline';
import Headline from '../nebulas/Typography/Headline';
import Button from '../stars/Button';
import { asCol } from '../nebulas/styled-shoelaces';
import skipIfEmpty from '../util/skipIfEmpty';

const textAlignments = { left: 'start', right: 'end', center: 'center' };

const CopyBlockCTA = skipIfEmpty(Button);
const CopyBlock = compose(
  withProps(({ textAlign, inverted }) => ({
    HeaderComponent: inverted ? Headline : FeatureHeadline,
    alignItems: textAlignments[textAlign],
    justifyContent: 'center',
    gutter: '0',
  })),
  asCol,
)(({
  body, className, cta, headline, HeaderComponent, inverted, textAlign,
}) => (
  <div className={className}>
    <HeaderComponent>{headline}</HeaderComponent>
    <BodyCopy inverted={inverted} align={textAlign}>{body}</BodyCopy>
    <CopyBlockCTA {...cta} />
  </div>
));

CopyBlock.propTypes = {
  body: string.isRequired,
  className: string,
  cta: exact({
    href: string.isRequired,
    children: string.isRequired,
    external: bool,
  }),
  headline: string.isRequired,
  inverted: bool,
  textAlign: oneOf(['left', 'right', 'center']),
};

CopyBlock.defaultProps = {
  background: false,
  className: '',
  cta: null,
  inverted: false,
  textAlign: 'left',
};


export default CopyBlock;
