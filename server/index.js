const express = require('express');
const app = require('./app');

const getContent = require('./getContent');

const pages = require('./ducks/pages/route');

app.prepare()
  .then(() => {
    getContent();
    const server = express();
    server.use(express.static('static'));
    server.get('/', pages);
    server.get('/:id', pages);

    server.listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
