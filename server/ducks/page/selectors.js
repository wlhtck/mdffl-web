// lodash/fp
const curry = require('lodash/fp/curry');
const flow = require('lodash/fp/flow');
const get = require('lodash/fp/get');
const find = require('lodash/fp/find');
const map = require('lodash/fp/map');
const omit = require('lodash/fp/omit');
const renameKey = require('../../../components/util/renameKey');

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
  find((item) => get('fields.slug', item) === slug),
  get('fields.content'),
  map((item) => flow(
    renameKey('sys.contentType.sys.id', 'fields.type'),
    get('fields'),
    (content) => contentParsers[content.type](content),
  )(item)),
);

const parseLinks = ({ id, links }) => ({
  id,
  links: map(flow(
    renameKey('fields.children', 'name'),
    renameKey('fields.link', 'href'),
    renameKey('fields.logo.fields.file.url', 'src'),
    omit('fields'),
    omit('sys'),
  ), links),
});

const getNavLinks = flow(
  get('items'),
  map(flow(
    get('fields'),
    renameKey('fields.id', 'key'),
    parseLinks,
  )),
);

const getLinks = curry((type, links) => flow(
  find(((item) => get('id', item) === type)),
  get('links'),
)(links));

module.exports = {
  getPageContent,
  getNavLinks,
  getLinks,
};
