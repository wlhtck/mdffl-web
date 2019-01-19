import React from 'react';
import { string } from 'prop-types';

const Image = ({ src, alt, className }) => (
  <img src={src} alt={alt} className={className} />
);

Image.propTypes = {
  src: string.isRequired,
  alt: string.isRequired,
  className: string,
};

Image.defaultProps = {
  className: '',
};

export default Image;
