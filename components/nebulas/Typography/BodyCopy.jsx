import ReactMarkdown from 'react-markdown';
import { oneOf, bool } from 'prop-types';
import withStyles from '../withStyles';
import styles from './styles';

// TODO: Rename this parameter to align
const BodyCopy = withStyles(({ inverted, textAlign }) => styles({
  color: (inverted ? 'white' : 'black'), size: '24px', align: textAlign,
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
