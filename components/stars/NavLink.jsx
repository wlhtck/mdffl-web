import { compose, setDisplayName, mapProps } from 'recompose';
import fontStyles from '../nebulas/fontStyles';
import withStyles from '../util/withStyles';
import renameProp from '../util/renameProp';

const NavLink = compose(
  setDisplayName('NavLink'),
  withStyles(fontStyles({
    family: 'raleway',
    size: '16px',
    color: 'white',
  })),
  withStyles({ textDecoration: 'none' }),
  renameProp('name', 'children'),
)('a');

export default NavLink;
