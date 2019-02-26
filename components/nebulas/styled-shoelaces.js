import {
  col, container, flex, row,
} from 'shoelaces';
import styled from 'styled-components';
import withStyles from './withStyles';

const render = (func) => styled.div`${func}`;

export const Col = render(col);
export const Container = render(container);
export const Flex = render(flex);
export const Row = render(row);

export const asCol = withStyles(col);
export const asContaner = withStyles(container);
export const asFlex = withStyles(flex);
export const asRow = withStyles(row);

export default {
  Container, Row, Col, Flex,
};
