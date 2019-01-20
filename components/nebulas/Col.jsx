import styled from 'styled-components';
import { oneOf, bool, number } from 'prop-types';

const Col = styled.div`
  align-items: ${({ align }) => (align)};
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'column-reverse' : 'column')};
  justify-content: center;
  max-width: 40%;
  ${({ padding }) => (padding ? `padding: ${padding}px;` : '')}

  *:last-child {
    margin-bottom: 0;
  }
`;

Col.propTypes = {
  align: oneOf(['center', 'flex-start', 'flex-end']),
  reverse: bool,
  padding: number,
};

Col.defaultProps = {
  align: 'center',
  reverse: false,
  padding: null,
};

export default Col;
