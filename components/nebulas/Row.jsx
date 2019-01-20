import styled from 'styled-components';
import { bool, number } from 'prop-types';

const Row = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  ${({ padding }) => (padding ? `padding: ${padding}px;` : '')}

  *:only-child {
    margin: 0 auto;
  }
  *:last-child {
    margin-bottom: 0;
  }
`;

Row.propTypes = {
  padding: number,
  reverse: bool,
};

Row.defaultProps = {
  padding: null,
  reverse: false,
};

export default Row;
