import React from 'react';
import { string, exact, bool } from 'prop-types';
import { Row } from '../nebulas/styled-shoelaces';
import CopyBlock from './CopyBlock';
import withStyles from '../util/withStyles';

const HeroBlock = withStyles(({ imgSrc }) => ({
  padding: '50px',
  '@media (min-width: 62em)': {
    padding: '100px',
  },
  background: `
    /* top, transparent red, faked with gradient */
    linear-gradient(
      rgba(0, 0, 0, 0.45),
      rgba(0, 0, 0, 0.45)
    ),
    /* bottom, image */
    url("${imgSrc}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: 'calc(100vh - 98px)',
}), ({
  headline, body, cta, className,
}) => (
  <Row alignContent="center" justifyContent="start" className={className} gutter="0">
    <CopyBlock
      xs={1}
      lg={1 / 2}
      inverted
      alignItems="start"
      gutter="0"
      headline={headline}
      body={body}
      cta={{ ...cta, type: 'secondary' }}
    />
  </Row>
));

HeroBlock.propTypes = {
  className: string,
  body: string.isRequired,
  cta: exact({
    href: string.isRequired,
    children: string.isRequired,
    external: bool,
  }).isRequired,
  headline: string.isRequired,
  imgSrc: string.isRequired,
};

HeroBlock.defaultProps = {
  className: '',
};

export default HeroBlock;
