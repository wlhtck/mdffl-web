import { compose, setDisplayName } from 'recompose';
import { bool } from 'prop-types';
import withStyles from '../util/withStyles';

const imageStyles = ({ fullWidth }) => (fullWidth ? ({
  width: '100%',
}) : null);


const StyledImage = compose(
  setDisplayName('Image'),
  withStyles(imageStyles),
)('img');

StyledImage.propTypes = {
  fullWidth: bool,
};

StyledImage.defaultProps = {
  fullWidth: false,
};


export default StyledImage;
