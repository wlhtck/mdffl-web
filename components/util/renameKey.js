const head = require('lodash/fp/head');
const at = require('lodash/fp/at');
const omit = require('lodash/fp/omit');
const set = require('lodash/fp/set');
const flow = require('lodash/fp/flow');
const curry = require('lodash/fp/curry');
const get = require('lodash/fp/get');

module.exports = curry((from, to, obj) => (
  get(from, obj)
    ? flow(
      set(to, head(at(from, obj))),
      omit(from),
    )(obj)
    : obj
));
