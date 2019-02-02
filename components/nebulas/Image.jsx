import styled from 'styled-components';
import { bool } from 'prop-types';

const StyledImage = styled.img`
  ${({ fullWidth }) => (fullWidth ? 'width: 100%;' : '')}
`;

StyledImage.propTypes = {
  fullWidth: bool,
};

StyledImage.defaultProps = {
  fullWidth: false,
};


export default StyledImage;
