import { black, white } from '../colors';

const marginBottom = { margin: '0 0 32px' };
const colors = { white, black };
const families = { raleway: 'Raleway', lato: 'Lato' };

/** @function fontStyles
  * Get font styles
  * @param {Object} props - The font properties.
  * @param {('left'|'right'|'center')} [props.align='left'] - css property text-align
  * @param {('black'|'white')} [props.color='black'] - css property color (text color)
  * @param {('lato'|'raleway')} [props.family='lato'] - css property color (text color)
  * @param {string} [props.size='24px'] - css property font-size
  * @param {number} [props.weight=600] - css property font-weight */

export default ({
  align = 'left', color = 'black', family = 'lato', size = '24px', weight = 600,
} = {}) => ({
  color: colors[color],
  fontFamily: `'${families[family]}', sans-serif`,
  fontWeight: weight,
  fontSize: size,
  textAlign: align,
  ...marginBottom,
});
