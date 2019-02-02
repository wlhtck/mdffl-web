import styled from 'styled-components';
import { white } from './colors';

// TODO: Implement stories with a better component when one exists

export default styled.div`
  display: inline-block;
  margin: 20px;
  padding: 32px;
  background-color: ${({ color }) => color || white};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;
