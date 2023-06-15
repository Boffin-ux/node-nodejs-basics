import { createReadStream } from 'fs';
import { getPath } from '../helpers/getPath.js';

const FOLDER = 'files';
const FILE = 'fileToRead.txt';
const ENCODE_STD = 'utf8';

const read = async () => {
  const path = getPath(import.meta.url, FOLDER, FILE);

  const rs = createReadStream(path, ENCODE_STD);
  rs.on('data', chunk => process.stdout.write(`${chunk}\n`));
  rs.on('error', err => console.error(err.message));
};

await read();