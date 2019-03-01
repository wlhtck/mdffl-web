import { branch, renderNothing } from 'recompose';
import { isEmpty } from 'lodash/fp';

const skipIfEmpty = branch(isEmpty, renderNothing);

export default skipIfEmpty;
