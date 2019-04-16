import React from 'react';
import { compose, setDisplayName } from 'recompose';
import { map } from 'lodash/fp';
import withStyles from '../util/withStyles';
import { primary } from '../nebulas/colors';
import { Row } from '../nebulas/styled-shoelaces';
import FooterLink from '../stars/FooterLink';

const Footer = compose(
  setDisplayName('Footer'),
  withStyles({
    backgroundColor: primary,
    paddingTop: '32px',
  }),
)(({ className, links }) => (
  <Row className={className} justifyContent="around" gutter="0" alignItems="center">
    {map((link) => <FooterLink {...link} />, links)}
  </Row>
));

export default Footer;
