import React from 'react';
import {
  string, func, bool, oneOf,
} from 'prop-types';
import styled from 'styled-components';
import { primary, white } from '../nebulas/colors';

const Button = ({
  url, onClick, text, className, external,
}) => (
  url
    ? (
      <a
        className={className}
        href={url}
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
  url: string,
  onClick: func,
  text: string.isRequired,
  className: string,
};

Button.defaultProps = {
  external: false,
  url: '',
  onClick: null,
  className: '',
};

const StyledButton = styled(Button)`
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 800;
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

StyledButton.propTypes = {
  type: oneOf(['primary', 'secondary']),
};

StyledButton.defaultProps = {
  type: 'primary',
};

export default StyledButton;
