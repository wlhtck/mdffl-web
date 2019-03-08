import { string } from 'prop-types';
import withStyles from '../../components/util/withStyles';
import * as colors from '../../components/nebulas/colors';

const TestBlock = withStyles(({ color }) => ({
  padding: '36px',
  width: '-webkit-fill-available',
  minHeight: '-webkit-fill-available',
  backgroundColor: colors[color],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}), 'div');

TestBlock.propTypes = {
  color: string,
};

TestBlock.defaultProps = {
  color: 'white',
};

export default TestBlock;
