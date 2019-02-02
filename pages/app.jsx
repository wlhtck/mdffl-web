import React from 'react';
import { withRouter } from 'next/router';
import Page from '../components/galaxies/Page';

export default withRouter(({ router: { query: { data } } }) => (
  <Page data={data} />
));
