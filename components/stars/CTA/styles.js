import { mergeAll } from 'lodash/fp';
import { primary, white } from '../../nebulas/colors';
import fontStyles from '../../nebulas/Typography/styles';

const backgroundColors = { primary, secondary: white };
const fontColors = { primary: 'white', secondary: 'primary' };

const buttonStyles = ({ type = 'primary' } = {}) => mergeAll([
  fontStyles({
    family: 'raleway',
    size: '16px',
    weight: 800,
    color: fontColors[type],
    lineHeight: 1,
  }), {
    backgroundColor: backgroundColors[type],
    display: 'inline-block',
    padding: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
]);

export default buttonStyles;
