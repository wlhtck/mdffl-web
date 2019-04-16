const express = require('express');
const app = require('./app');

const getContent = require('./getContent');

const page = require('./ducks/page/route');

app.prepare()
  .then(() => {
    getContent('page');
    getContent('linkList');
    const server = express();
    server.use(express.static('static'));
    server.get('/', page);
    server.get('/:id', page);

    server.listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
