import styles from '../../Button/styles';

describe('components/stars/Button/styles', () => {
  it('returns the default styles', () => {
    expect(styles()).toMatchSnapshot();
  });

  it('returns the secondary styles', () => {
    expect(styles({ type: 'secondary' })).toMatchSnapshot();
  });
});
