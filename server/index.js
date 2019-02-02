const express = require('express');
const app = require('./app');

const getContent = require('./getContent');

const pages = require('./routes/pages');

app.prepare()
  .then(() => {
    getContent();
    const server = express();
    server.get('/', pages);
    server.get('/:id', pages);

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
