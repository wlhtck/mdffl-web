import ReactMarkdown from 'react-markdown';
import { oneOf, bool } from 'prop-types';
import withStyles from '../withStyles';
import styles from './styles';

const BodyCopy = withStyles(({ inverted, align }) => styles({
  align, color: (inverted ? 'white' : 'black'), size: '24px',
}), ReactMarkdown);

BodyCopy.propTypes = {
  textAlign: oneOf(['left', 'right', 'center']),
  inverted: bool,
};

BodyCopy.defaultProps = {
  textAlign: 'left',
  inverted: false,
};

export default BodyCopy;
