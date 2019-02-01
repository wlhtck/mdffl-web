import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { white } from '../nebulas/colors';

const NavLink = ({ href, text, className }) => (
  <a href={href} className={className}>
    {text}
  </a>
);

NavLink.propTypes = {
  href: string.isRequired,
  text: string.isRequired,
  className: string,
};

NavLink.defaultProps = {
  className: '',
};

export default styled(NavLink)`
  color: ${white};
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  text-decoration: none;
`;
