import React from 'react';
import {
  bool, string, exact, oneOf,
} from 'prop-types';
import { compose, setDisplayName } from 'recompose';
import { grey } from '../nebulas/colors';
import { Col, Row } from '../nebulas/styled-shoelaces';
import withStyles from '../util/withStyles';
import skipIfEmpty from '../util/skipIfEmpty';
import CopyBlock from './CopyBlock';
import Image from '../nebulas/Image';


const ContentBlockImage = skipIfEmpty(
  (props) => (<Col xs={1} lg={1 / 2} gutter={0}><Image {...props} fullWidth /></Col>),
);

const ContentBlockCopy = withStyles({
  padding: '50px!important',
  '@media (min-width: 62em)': {
    padding: '48px 100px 0!important',
  },
}, CopyBlock);

const ContentBlock = compose(
  setDisplayName('ContentBlock'),
  withStyles(({ background }) => ({ backgroundColor: background ? grey : '' })),
)(({
  body, className, cta, headline, image, imageAlign, textAlign,
}) => (
  <Row reverse={imageAlign === 'right'} className={className} gutter="0" justifyContent="around">
    <ContentBlockImage {...image} />
    <ContentBlockCopy
      xs={1}
      lg={image ? (1 / 2) : 3 / 4}
      body={body}
      cta={cta}
      headline={headline}
      image={image}
      textAlign={textAlign}
    />
  </Row>
));

ContentBlock.propTypes = {
  background: bool,
  body: string.isRequired,
  className: string,
  cta: exact({
    href: string.isRequired,
    children: string.isRequired,
    external: bool,
  }),
  headline: string.isRequired,
  image: exact({
    src: string,
    alt: string,
  }),
  imageAlign: oneOf(['left', 'right']),
  textAlign: oneOf(['left', 'right', 'center']),
};

ContentBlock.defaultProps = {
  background: false,
  className: '',
  cta: null,
  image: null,
  imageAlign: 'right',
  textAlign: 'left',
};

export default ContentBlock;
