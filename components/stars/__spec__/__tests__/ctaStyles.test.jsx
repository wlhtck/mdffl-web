import styles from '../../CTA/styles';

describe('components/stars/CTA/styles', () => {
  it('returns the default styles', () => {
    expect(styles()).toMatchSnapshot();
  });

  it('returns the secondary styles', () => {
    expect(styles({ type: 'secondary' })).toMatchSnapshot();
  });
});
