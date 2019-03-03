import styles from '../../Typography/styles';

describe('nebulas/Typography/styles', () => {
  it('returns the default styles', () => {
    expect(styles()).toMatchSnapshot();
  });

  it('returns the specified styles', () => {
    expect(styles({
      align: 'center', color: 'white', family: 'raleway', size: '36px', weight: 800,
    })).toMatchSnapshot();
  });
});
