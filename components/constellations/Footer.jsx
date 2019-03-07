import React from 'react';
import { compose, setDisplayName } from 'recompose';
import withStyles from '../util/withStyles';
import { primary } from '../nebulas/colors';
import { Row } from '../nebulas/styled-shoelaces';
import BodyCopy from '../nebulas/Typography/BodyCopy';
import Image from '../nebulas/Image';

const ContentfulAttribution = compose(
  setDisplayName('ContentfulAttribution'),
  withStyles({
    maxWidth: '100px',
    width: '100%',
    maxHeight: '68px',
  }),
)((({ className }) => (
  <a
    style={{ display: 'inline-flex' }}
    href="https://www.contentful.com/"
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
    <Image
      className={className}
      src="https://images.ctfassets.net/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg"
      alt="Powered by Contentful"
    />
  </a>
)));

const Footer = compose(
  setDisplayName('Footer'),
  withStyles({
    backgroundColor: primary,
    paddingTop: '32px',
  }),
)(({ className }) => (
  <Row className={className} justifyContent="around" gutter="0">
    <BodyCopy inverted>Footer content goes here!</BodyCopy>
    <ContentfulAttribution />
  </Row>
));

export default Footer;
