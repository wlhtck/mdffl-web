import React from 'react';
import { compose, setDisplayName } from 'recompose';
import withStyles from '../util/withStyles';
import Image from '../nebulas/Image';

const FooterLink = compose(
  setDisplayName('FooterLink'),
  withStyles({
    maxWidth: '100px',
    maxHeight: '68px',
    width: '100%',
    marginBottom: '36px',
  }),
)(({
  className, href, name, src,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
    <Image
      className={className}
      src={src}
      alt={name}
    />
  </a>
));

export default FooterLink;
