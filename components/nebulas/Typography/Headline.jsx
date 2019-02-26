import withStyles from '../withStyles';
import styles from './styles';

const Headline = withStyles(styles({
  color: 'white', family: 'raleway', size: '36px', weight: 800,
}), 'h1');

export default Headline;
