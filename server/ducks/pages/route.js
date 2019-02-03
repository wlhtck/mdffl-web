// node
const fs = require('fs');
const path = require('path');

// app
const app = require('../../app');

const selectors = require('./selectors');

const pages = (req, res) => {
  const data = JSON.parse(fs.readFileSync(
    path.join(__dirname, '..', '..', '..', 'data', 'pages.json'),
  ));

  app.render(req, res, '/app', {
    data: selectors.getPageContent(req.params.id || 'index')(data),
    links: selectors.getNavLinks(data),
  });
};

module.exports = pages;
