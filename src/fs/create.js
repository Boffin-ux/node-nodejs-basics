import * as fs from 'fs/promises';
import { getPath } from '../helpers/getPath.js';

const CONTENT = 'I am fresh and young';
const FILE = 'fresh.txt';
const OUTPUT_FOLDER = 'files';
const ERROR_MESSAGE = 'FS operation failed';
const FLAG = 'wx';

const create = async () => {
  const path = getPath(import.meta.url, OUTPUT_FOLDER, FILE);
  const checkFile = await fs.open(path).catch(err => false);

  if (!!checkFile) {
    throw new Error(ERROR_MESSAGE);
  }

  await fs.writeFile(path, CONTENT, { flag: FLAG });
};

await create();