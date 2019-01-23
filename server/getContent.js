const fs = require('fs');
const path = require('path');
const { createClient } = require('contentful');

require('dotenv').config();

const SPACE = process.env.CONTENTFUL_SPACE;
const TOKEN = process.env.CONTENTFUL_TOKEN;

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
});

const getContent = () => client.getEntries({
  content_type: 'page',
  include: 3,
}).then((entries) => {
  fs.writeFileSync(
    path.join(__dirname, '..', 'data', 'pages.json'),
    JSON.stringify(entries),
  );
  console.log('> Content gotten and written for page');
}).catch(console.error);

module.exports = getContent;
