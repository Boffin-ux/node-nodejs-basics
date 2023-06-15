import * as fs from 'fs/promises';
import { getPath } from '../helpers/getPath.js';

const FILE = 'fileToRemove.txt';
const OUTPUT_FOLDER = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const remove = async () => {
  const path = getPath(import.meta.url, OUTPUT_FOLDER, FILE)

  try {
    await fs.unlink(path);
  } catch (err) {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();