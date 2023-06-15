import * as fs from 'fs/promises';
import { getPath } from '../helpers/getPath.js';

const ORIGINAL_FILE = 'wrongFilename.txt';
const TARGET_FILE = 'properFilename.md';
const OUTPUT_FOLDER = 'files';
const ERROR_MESSAGE = 'FS operation failed';

const rename = async () => {
  const originalPath = getPath(import.meta.url, OUTPUT_FOLDER, ORIGINAL_FILE);
  const targetPath = getPath(import.meta.url, OUTPUT_FOLDER, TARGET_FILE);

  try {
    await fs.rename(originalPath, targetPath);
  } catch (err) {
    throw new Error(ERROR_MESSAGE);
  }
};

await rename();