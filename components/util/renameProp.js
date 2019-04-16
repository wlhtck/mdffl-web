import { mapProps } from 'recompose';
import renameKey from './renameKey';

export default (from, to) => mapProps(renameKey(from, to));
