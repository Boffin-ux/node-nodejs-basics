import { createWriteStream } from 'fs';
import * as readline from 'readline/promises';
import { once } from 'events';
import { getPath } from '../helpers/getPath.js';

const FOLDER = 'files';
const FILE = 'fileToWrite.txt';

const write = async () => {
  const path = getPath(import.meta.url, FOLDER, FILE);
  const ws = createWriteStream(path);

  try {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.on('line', chunk => ws.write(`${chunk}\n`));
    await once(rl, 'close');
  } catch (err) {
    console.error(err);
  }
};

await write();