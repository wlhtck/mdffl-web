import {
  string, func, bool, oneOf,
} from 'prop-types';
import { omit } from 'lodash/fp';
import {
  compose, mapProps, componentFromProp, branch, withProps, setDisplayName,
} from 'recompose';
import withStyles from '../../util/withStyles';
import styles from './styles';

const omitProps = compose(mapProps, omit);
const withExternalLinkProps = withProps({ rel: 'noreferrer noopener', target: '_blank' });
const asCTA = compose(omitProps(['href']), withProps(() => ({ component: 'button' })));
const asLink = compose(
  omitProps(['onClick']),
  withProps(() => ({ component: 'a' })),
  branch(
    ({ external }) => !!external,
    withExternalLinkProps,
  ),
);

const CTA = compose(
  withStyles(styles),
  branch(
    ({ href }) => !href,
    asCTA,
    asLink,
  ),
  omitProps(['external']),
  setDisplayName('CTA'),
)(componentFromProp('component'));

CTA.propTypes = {
  children: string.isRequired,
  className: string,
  external: bool,
  onClick: func,
  type: oneOf(['primary', 'secondary']),
  url: string,
};

CTA.defaultProps = {
  className: '',
  external: false,
  onClick: null,
  type: 'primary',
  url: null,
};

export default CTA;
