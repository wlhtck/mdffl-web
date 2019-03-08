import { compose, setDisplayName } from 'recompose';
import styles from './styles';
import withStyles from '../../util/withStyles';

const FeatureHeadline = compose(
  setDisplayName('FeatureHeadline'),
  withStyles(({ inverted }) => styles({
    family: 'raleway', weight: 700, size: '36px', color: (inverted ? 'white' : 'black'),
  })),
)('h2');

export default FeatureHeadline;
