// node
const fs = require('fs');
const path = require('path');

// app
const app = require('../../app');

const selectors = require('./selectors');

const page = (req, res) => {
  const pages = JSON.parse(fs.readFileSync(
    path.join(__dirname, '..', '..', '..', 'data', 'page.json'),
  ));
  const links = JSON.parse(fs.readFileSync(
    path.join(__dirname, '..', '..', '..', 'data', 'linkList.json'),
  ));

  const navLinks = selectors.getNavLinks(links);

  app.render(req, res, '/app', {
    data: selectors.getPageContent(req.params.id || 'index')(pages),
    headerLinks: selectors.getLinks('navigation', navLinks),
    footerLinks: selectors.getLinks('footer', navLinks),
  });
};

module.exports = page;
