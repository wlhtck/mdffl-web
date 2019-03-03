import { compose, setDisplayName } from 'recompose';
import { withFontStyles } from './styles';

const Headline = compose(
  setDisplayName('Headline'),
  withFontStyles({
    color: 'white', family: 'raleway', size: '36px', weight: 800,
  }),
)('h1');

export default Headline;
