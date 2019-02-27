import { black, white, primary } from '../colors';

const marginBottom = { margin: '0 0 32px' };
const colors = { white, black, primary };
const families = { raleway: 'Raleway', lato: 'Lato' };

// TODO: don't default align to left
/** @function fontStyles
  * Get font styles
  * @param {Object} props - The font properties.
  * @param {('left'|'right'|'center')} [props.align] - css property text-align
  * @param {('black'|'white'|'primary')} [props.color='black'] - css property color (text color)
  * @param {('lato'|'raleway')} [props.family='lato'] - css property font-family
  * @param {string} [props.lineHeight='normal'] - css property line-height
  * @param {string} [props.size='24px'] - css property font-size
  * @param {number} [props.weight=600] - css property font-weight */

const fontStyles = ({
  align, color = 'black', family = 'lato', lineHeight = 'normal', size = '24px', weight = 600,
} = {}) => ({
  color: colors[color],
  fontFamily: `'${families[family]}', sans-serif`,
  fontWeight: weight,
  fontSize: size,
  lineHeight,
  textAlign: align,
  ...marginBottom,
});

export default fontStyles;
