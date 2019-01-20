import React from 'react';
import {
  string, func, bool, oneOf,
} from 'prop-types';
import styled from 'styled-components';
import { primary, white } from '../nebulas/colors';

const Button = ({
  link, onClick, text, className, external,
}) => (
  link
    ? (
      <a
        className={className}
        href={link}
        target={external ? '_blank' : ''}
        rel={external ? 'noreferrer noopener' : ''}
      >
        {text}
      </a>
    )
    : <button className={className} onClick={onClick} type="button">{text}</button>

);

const backgroundColors = {
  primary,
  secondary: white,
};

const fontColors = {
  primary: white,
  secondary: primary,
};

Button.propTypes = {
  external: bool,
  link: string,
  onClick: func,
  text: string.isRequired,
  className: string,
  type: oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  external: false,
  link: '',
  onClick: null,
  className: '',
  type: 'primary',
};

export default styled(Button)`
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  background-color: ${({ type }) => backgroundColors[type]};
  color: ${({ type }) => fontColors[type]};
  display: inline-block;
  padding: 16px;
  border: none;
  line-height: 1;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
`;
