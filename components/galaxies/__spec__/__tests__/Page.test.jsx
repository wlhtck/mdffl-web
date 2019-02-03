import React from 'react';
import { shallow } from 'enzyme';
import Page from '../../Page';
import data from '../page.data';

describe('components/galaxies/Page', () => {
  it('renders <HeroBlock />s and <ContentBlock />s', () => {
    expect(shallow(<Page data={data.page} />)).toMatchSnapshot();
  });
});
