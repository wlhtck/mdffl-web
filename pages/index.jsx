import React from 'react';
import {
  map, get, find, flow, set, omit, head, at,
} from 'lodash/fp';
import { withRouter } from 'next/router';
import ContentBlock from '../components/constellations/ContentBlock';
import data from '../data/pages';

const renameKey = (from, to) => (obj) => flow(
  set(to, head(at(from, obj))),
  omit(from),
)(obj);

const getContentBlockFields = flow(
  renameKey('cta.fields', 'cta'),
  renameKey('image.fields', 'image'),
  renameKey('image.title', 'image.alt'),
  renameKey('image.file.url', 'image.src'),
  renameKey('slug', 'key'),
  omit('image.file'),
);

const getPageContent = (slug) => flow(
  get('items'),
  find((item) => get('fields.slug')(item) === slug),
  get('fields.content'),
  map((item) => set('fields.type', get('sys.contentType.sys.id')(item))(item)),
  map((item) => get('fields')(item)),
);

const ContentComponents = {
  heroBlock: () => (<div />),
  contentBlock: ContentBlock,
};

const contentParsers = {
  heroBlock: () => ({}),
  contentBlock: getContentBlockFields,
};

export default withRouter(({ router: { query: { slug } } }) => (
  map((content) => {
    const contentType = get('type')(content);
    const Component = ContentComponents[contentType];
    const props = contentParsers[contentType](content);

    return (
      <Component {...props} />
    );
  })(getPageContent(slug)(data))
));
