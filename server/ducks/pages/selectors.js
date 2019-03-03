// lodash/fp
const flow = require('lodash/fp/flow');
const get = require('lodash/fp/get');
const find = require('lodash/fp/find');
const map = require('lodash/fp/map');
const head = require('lodash/fp/head');
const at = require('lodash/fp/at');
const omit = require('lodash/fp/omit');
const set = require('lodash/fp/set');
const replace = require('lodash/fp/replace');
const omitBy = require('lodash/fp/omitBy');
const reverse = require('lodash/fp/reverse');

const renameKey = (from, to) => (obj) => (
  get(from)(obj)
    ? flow(
      set(to, head(at(from, obj))),
      omit(from),
    )(obj)
    : obj
);

const contentParsers = {
  heroBlock: flow(
    renameKey('image.fields.file.url', 'imgSrc'),
    renameKey('cta.fields', 'cta'),
    renameKey('cta.text', 'cta.children'),
    renameKey('cta.url', 'cta.href'),
    renameKey('slug', 'key'),
    omit('image'),
  ),
  contentBlock: flow(
    renameKey('cta.fields', 'cta'),
    renameKey('cta.text', 'cta.children'),
    renameKey('cta.url', 'cta.href'),
    renameKey('image.fields', 'image'),
    renameKey('image.title', 'image.alt'),
    renameKey('image.file.url', 'image.src'),
    renameKey('slug', 'key'),
    omit('image.description'),
    omit('image.file'),
  ),
};

const getPageContent = (slug) => flow(
  get('items'),
  find((item) => get('fields.slug')(item) === slug),
  get('fields.content'),
  map((item) => flow(
    renameKey('sys.contentType.sys.id', 'fields.type'),
    get('fields'),
    (content) => contentParsers[content.type](content),
  )(item)),
);

const getNavLinks = flow(
  get('items'),
  reverse,
  // omitBy((pages) => pages.fields.slug === 'index'),
  map((pages) => ({
    href: `/${replace('index', '')(get('fields.slug')(pages))}`,
    children: get('fields.name')(pages),
    key: get('fields.slug')(pages),
  })),
);

module.exports = {
  getPageContent,
  getNavLinks,
};
