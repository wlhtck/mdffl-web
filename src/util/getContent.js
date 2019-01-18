/* eslint-disable */
import fs from 'fs';
import path from 'path';
import { createClient } from 'contentful';

require('dotenv').config();

const SPACE = process.env.CONTENTFUL_SPACE;
const TOKEN = process.env.CONTENTFUL_TOKEN;

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
});

const types = [
  'page',
];

const getcontent = async () => {
  console.log('> Starting import...');
  for (const type of types) {
    try {
      console.log('> Getting content for', type);
      const entries = await client.getEntries({
        content_type: type,
        include: 3,
      });
      if (entries.total === 1) {
        const { fields } = entries.items[0];
        fs.writeFileSync(
          path.join(__dirname, '..', '..', 'data', `${type}.json`),
          JSON.stringify(fields),
        );
        console.log('> Content gotten and written for', type);
      }
    } catch (e) {
      console.error(e);
    }
  }
  return true;
};

getcontent();
