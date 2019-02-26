import withStyles from '../withStyles';
import styles from './styles';

const FeatureHeadline = withStyles(styles({
  family: 'raleway', weight: 700, size: '36px',
}), 'h2');

export default FeatureHeadline;
