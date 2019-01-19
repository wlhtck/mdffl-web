import styled from 'styled-components';
import { black, white } from './colors';

// TODO: create common margin all elements have margin: 32 0;
export const Headline = styled.h1`
  color: ${white};
  font-family: 'Raleway', sans-serif;
  margin: 32px 0;
  font-weight: 800;
  font-size: 36px;
`;

export const FeatureHeadline = styled.h2`
  color: ${black}
  font-family: 'Raleway', sans-serif;
  margin: 32px 0;
  font-weight: 700;
  font-size: 36px;
`;

export const BodyCopy = styled.p`
  color: ${({ inverted }) => (inverted ? white : black)};
  font-family: 'Lato', sans-serif;
  font-size: 24px;
`;
