import { readFile } from 'fs/promises';
import { getPath } from '../helpers/getPath.js';

const FILE = 'fileToRead.txt';
const OUTPUT_FOLDER = 'files';
const ERROR_MESSAGE = 'FS operation failed';
const ENCODE_STD = 'utf8';

const read = async () => {
  const path = getPath(import.meta.url, OUTPUT_FOLDER, FILE);

  try {
    const readData = await readFile(path, { encoding: ENCODE_STD });
    console.log(readData)
  } catch {
    throw new Error(ERROR_MESSAGE);
  }

};

await read();