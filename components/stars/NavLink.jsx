import { compose, setDisplayName } from 'recompose';
import fontStyles from '../nebulas/fontStyles';
import withStyles from '../util/withStyles';

const NavLink = compose(
  setDisplayName('NavLink'),
  withStyles(fontStyles({
    family: 'raleway',
    size: '16px',
    color: 'white',
  })),
  withStyles({ textDecoration: 'none' }),
)('a');

export default NavLink;
