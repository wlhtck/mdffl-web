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
const getContent = (type) => client.getEntries({
  content_type: type,
  include: 3,
}).then((entries) => {
  if (!fs.existsSync(path.join(__dirname, '..', 'data'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'data'));
  }
  fs.writeFileSync(
    path.join(__dirname, '..', 'data', `${type}.json`),
    JSON.stringify(entries),
  );
  console.log(`> Content gotten and written for ${type}`);
}).catch(console.error);

module.exports = getContent;
