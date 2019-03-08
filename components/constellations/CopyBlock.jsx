import React from 'react';
import {
  bool, exact, oneOf, string,
} from 'prop-types';
import { withProps, compose, setDisplayName } from 'recompose';
import BodyCopy from '../nebulas/BodyCopy';
import FeatureHeadline from '../nebulas/FeatureHeadline';
import Headline from '../nebulas/Headline';
import CTA from '../stars/CTA';
import { asCol } from '../nebulas/styled-shoelaces';
import skipIfEmpty from '../util/skipIfEmpty';

const textAlignments = { left: 'start', right: 'end', center: 'center' };

const CopyBlockCTA = skipIfEmpty(CTA);
const CopyBlock = compose(
  setDisplayName('CopyBlock'),
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
    type: oneOf(['primary', 'secondary']),
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
