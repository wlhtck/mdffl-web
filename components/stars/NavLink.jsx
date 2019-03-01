import { compose } from 'recompose';
import fontStyles from '../nebulas/Typography/styles';
import withStyles from '../util/withStyles';

const NavLink = compose(
  withStyles(fontStyles({
    family: 'raleway',
    size: '16px',
    color: 'white',
  })),
  withStyles({ textDecoration: 'none' }),
)('a');

export default NavLink;
