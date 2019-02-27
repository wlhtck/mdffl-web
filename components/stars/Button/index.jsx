import {
  string, func, bool, oneOf,
} from 'prop-types';
import { omit } from 'lodash/fp';
import {
  compose, mapProps, componentFromProp, branch, withProps,
} from 'recompose';
import withStyles from '../../nebulas/withStyles';
import styles from './styles';

const omitProps = compose(mapProps, omit);
const withExternalLinkProps = withProps({ rel: 'noreferrer noopener', target: '_blank' });
const asButton = compose(omitProps(['href']), withProps(() => ({ component: 'button' })));
const asLink = compose(
  omitProps(['onClick']),
  withProps(() => ({ component: 'a' })),
  branch(
    ({ external }) => !!external,
    withExternalLinkProps,
  ),
);

const Button = compose(
  withStyles(styles),
  branch(
    ({ href }) => !href,
    asButton,
    asLink,
  ),
  omitProps(['external']),
)(componentFromProp('component'));

Button.propTypes = {
  children: string.isRequired,
  className: string,
  external: bool,
  onClick: func,
  type: oneOf(['primary', 'secondary']),
  url: string,
};

Button.defaultProps = {
  className: '',
  external: false,
  onClick: null,
  type: 'primary',
  url: null,
};

export default Button;
