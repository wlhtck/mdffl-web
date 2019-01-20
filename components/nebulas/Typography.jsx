import styled from 'styled-components';
import { oneOf, bool } from 'prop-types';
import { black, white } from './colors';

// TODO: create common margin all elements have margin: 32 0;
export const Headline = styled.h1`
  color: ${white};
  font-family: 'Raleway', sans-serif;
  margin: 0 0 32px;
  font-weight: 800;
  font-size: 36px;
`;

export const FeatureHeadline = styled.h2`
  color: ${black};
  font-family: 'Raleway', sans-serif;
  margin: 0 0 32px;
  font-weight: 700;
  font-size: 36px;
`;

export const BodyCopy = styled.p`
  text-align: ${({ textAlign }) => (textAlign)};
  color: ${({ inverted }) => (inverted ? white : black)};
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  margin: 0 0 32px;
`;

BodyCopy.propTypes = {
  textAlign: oneOf(['left', 'right', 'center']),
  inverted: bool,
};

BodyCopy.defaultProps = {
  textAlign: 'left',
  inverted: false,
};
