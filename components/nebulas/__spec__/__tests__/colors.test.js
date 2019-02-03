import {
  primary, secondary, black, grey, white,
} from '../../colors';

describe('components/nebulas/colors', () => {
  it('exports primary', () => {
    expect(primary).toMatchSnapshot();
  });
  it('exports secondary', () => {
    expect(secondary).toMatchSnapshot();
  });
  it('exports black', () => {
    expect(black).toMatchSnapshot();
  });
  it('exports grey', () => {
    expect(grey).toMatchSnapshot();
  });
  it('exports white', () => {
    expect(white).toMatchSnapshot();
  });
});
