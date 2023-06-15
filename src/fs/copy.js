import * as fs from 'fs/promises';
import { join } from 'path';
import { getPath } from '../helpers/getPath.js';

const ORIGINAL_FOLDER = 'files';
const TARGET_FOLDER = 'files_copy';
const ERROR_MESSAGE = 'FS operation failed';

const copy = async () => {
  const originalDir = getPath(import.meta.url, ORIGINAL_FOLDER);
  const targetDir = getPath(import.meta.url, TARGET_FOLDER);

  try {
    await fs.mkdir(targetDir);
    const files = await fs.readdir(originalDir);

    await Promise.all(files.map(async (file) => {
      await fs.copyFile(join(originalDir, file), join(targetDir, file));
    }));
  } catch (err) {
    throw new Error(ERROR_MESSAGE);
  }
};

await copy();
