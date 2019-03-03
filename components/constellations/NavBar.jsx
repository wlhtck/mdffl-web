import React from 'react';
import { arrayOf, exact, string } from 'prop-types';
import { map } from 'lodash/fp';
import { primary } from '../nebulas/colors';
import { Row } from '../nebulas/styled-shoelaces';
import Image from '../nebulas/Image';
import NavLink from '../stars/NavLink';
import CTA from '../stars/CTA';
import withStyles from '../util/withStyles';

const navSpacing = { margin: '0 2vw' };
const NavItem = withStyles(navSpacing, NavLink);
const NavCTA = withStyles(navSpacing, CTA);
const NavLogo = withStyles({ margin: '0 auto 0 0' }, ({ className }) => (
  <a href="/" className={className}>
    <Image src="/mdffl-logo.png" alt="MDFFL Logo" />
  </a>
));

const NavBar = withStyles({
  padding: '25px',
  backgroundColor: primary,
}, ({ links, className }) => (
  <Row alignItems="center" className={className} gutter="0">
    <NavLogo />
    {map((link) => <NavItem {...link} />, links)}
    <NavCTA
      href="https://www.playyon.com/metro-detroit-flag-football-league/registrations/"
      type="secondary"
      external
    >
      REGISTER
    </NavCTA>
  </Row>
));

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

export default NavBar;
