import { compose, setDisplayName } from 'recompose';
import { withFontStyles } from './styles';

const FeatureHeadline = compose(
  setDisplayName('FeatureHeadline'),
  withFontStyles({
    family: 'raleway', weight: 700, size: '36px',
  }),
)('h2');

export default FeatureHeadline;
