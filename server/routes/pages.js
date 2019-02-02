// node
const fs = require('fs');
const path = require('path');

// lodash/fp
const flow = require('lodash/fp/flow');
const get = require('lodash/fp/get');
const find = require('lodash/fp/find');
const map = require('lodash/fp/map');
const head = require('lodash/fp/head');
const at = require('lodash/fp/at');
const omit = require('lodash/fp/omit');
const set = require('lodash/fp/set');

// app
const app = require('../app');
const dev = require('../../utils/dev');

const renameKey = (from, to) => (obj) => flow(
  set(to, head(at(from, obj))),
  omit(from),
)(obj);

const contentParsers = {
  heroBlock: flow(
    renameKey('image.fields.file.url', 'imgSrc'),
    renameKey('cta.fields', 'cta'),
    renameKey('slug', 'key'),
    omit('image'),
  ),
  contentBlock: flow(
    renameKey('cta.fields', 'cta'),
    renameKey('image.fields', 'image'),
    renameKey('image.title', 'image.alt'),
    renameKey('image.file.url', 'image.src'),
    renameKey('slug', 'key'),
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
  dev.log('pageContent'),
);

const pages = (req, res) => {
  const data = JSON.parse(fs.readFileSync(
    path.join(__dirname, '..', '..', 'data', 'pages.json'),
  ));

  app.render(req, res, '/app', { data: getPageContent(req.params.id || 'index')(data) });
};

module.exports = pages;
