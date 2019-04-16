import data from './data.json';
import { getPageContent, getNavLinks } from '../selectors';

describe('ducks/pages/selectors', () => {
  describe('getPageContent', () => {
    it('gets getPageContent as needed by the renderer', () => {
      expect(getPageContent('index')(data)).toMatchSnapshot();
    });
  });

  describe('getNavLinks', () => {
    it('gets NavLinks as needed by the renderer', () => {
      expect(getNavLinks(data)).toMatchSnapshot();
    });
  });
});
