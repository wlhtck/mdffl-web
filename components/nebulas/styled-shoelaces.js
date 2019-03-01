import {
  col, container, flex, row,
} from 'shoelaces';
import withStyles from '../util/withStyles';

export const asCol = withStyles(col);
export const asContaner = withStyles(container);
export const asFlex = withStyles(flex);
export const asRow = withStyles(row);

export const Col = asCol('div');
export const Container = asContaner('div');
export const Flex = asFlex('div');
export const Row = asRow('div');

export default {
  Container, Row, Col, Flex,
};
