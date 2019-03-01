import React from 'react';
import { arrayOf, exact, string } from 'prop-types';
import styled from 'styled-components';
import { map } from 'lodash/fp';
import { primary } from '../nebulas/colors';
import { Row } from '../nebulas/styled-shoelaces';
import Image from '../nebulas/Image';
import NavLink from '../stars/NavLink';
import Button from '../stars/Button';

const NavBar = ({ links, className }) => (
  <Row alignItems="center" className={className} gutter="0">
    <a href="/" className="logo">
      <Image src="/mdffl-logo.png" alt="MDFFL Logo" />
    </a>
    {map((link) => <NavLink {...link} />)(links)}
    <Button
      href="https://www.playyon.com/metro-detroit-flag-football-league/registrations/"
      type="secondary"
      external
    >
      REGISTER
    </Button>
  </Row>
);

NavBar.propTypes = {
  links: arrayOf(exact({
    key: string.isRequired,
    href: string.isRequired,
    children: string.isRequired,
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
