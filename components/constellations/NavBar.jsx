import React from 'react';
import { arrayOf, exact, string } from 'prop-types';
import styled from 'styled-components';
import { map } from 'lodash/fp';
import { primary } from '../nebulas/colors';
import Row from '../nebulas/Row';
import Image from '../nebulas/Image';
import NavLink from '../stars/NavLink';
import Button from '../stars/Button';

const NavBar = ({ links, className }) => (
  <Row className={className}>
    <a href="/" className="logo">
      <Image src="/mdffl-logo.png" alt="MDFFL Logo" />
    </a>
    {map((link) => <NavLink {...link} />)(links)}
    <Button
      url="https://www.playyon.com/metro-detroit-flag-football-league/registrations/"
      text="REGISTER"
      type="secondary"
      external
    />
  </Row>
);

NavBar.propTypes = {
  links: arrayOf(exact({
    key: string.isRequired,
    url: string.isRequired,
    text: string.isRequired,
  })).isRequired,
  className: string,
};

NavBar.defaultProps = {
  className: '',
};

export default styled(NavBar)`
  padding: 25px;
  background-color: ${primary};
  justify-content: flex-end;
  align-items: center;
  a.logo {
    margin: 0 auto 0 0;
  }
  > * {
    margin: 0 2vw;
  }
`;
