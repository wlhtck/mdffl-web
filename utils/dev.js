/* eslint-disable */
// Utility functions to make development easier

const log = (msg) => (data) => {
  console.group(msg);
  console.log(data);
  console.groupEnd();
  return data;
};

const debug = (msg) => data => {
  debugger;
  return data;
}

module.exports = {
  log,
  debug,
}
