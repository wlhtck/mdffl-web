const express = require('express');
const next = require('next');

const getContent = require('./getContent');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const pagesHandler = (req, res) => {
  const actualPage = '/index';
  const queryParams = { slug: req.params.id || 'index' };
  app.render(req, res, actualPage, queryParams);
};

app.prepare()
  .then(() => {
    getContent();
    const server = express();
    server.get('/', pagesHandler);
    server.get('/:id', pagesHandler);

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
